import { useCallback, useState } from 'react'
import { type ToastQueue } from '../toast-queue'
import { type InternalToastOptions } from '../types'
import { omit } from '../utils'
import Toast from './toast'

type Props = {
  queue: ToastQueue
  toasts: InternalToastOptions[]
}

function ToastContainer(props: Props) {
  const { toasts, queue } = props

  const [hoverState, setHoverState] = useState(false)
  const [heightMap, setHeightMap] = useState(new Map<string, number>())

  const onEnter = useCallback((key: string, height: number) => {
    setHeightMap((prev) => {
      prev.set(key, height)
      return new Map(prev)
    })
  }, [])

  const onExit = useCallback((key: string) => {
    setHeightMap((prev) => {
      prev.delete(key)
      return new Map(prev)
    })
  }, [])

  const offsetHeight = useCallback(
    (toast: InternalToastOptions, index: number) => {
      let offset = 0
      let start = toasts.length - 1

      if (toasts.length > toasts[index].maxCount! && toast.open === false) {
        start = start - 1
      }

      for (let i = start; i > index; i--) {
        offset += (heightMap.get(toasts[i].key!) || 0) + toasts[i].gap!
      }

      return offset
    },
    [heightMap, toasts],
  )

  const onOpenChange = useCallback(
    (key: string, open: boolean) => {
      queue.update(key, { open })
    },
    [queue],
  )

  return (
    <div
      onMouseEnter={() => {
        setHoverState(true)
      }}
      onMouseLeave={() => {
        setHoverState(false)
      }}
      className={'toast__container'}
    >
      {toasts.map((toast, index) =>
        toast.renderer!(
          <Toast
            key={toast.key}
            onOpenChange={(open) => onOpenChange(toast.key!, open)}
            onEnter={(size) => {
              onEnter(toast.key!, size)
            }}
            onExit={() => {
              onExit(toast.key!)
            }}
            onClosed={() => {
              toast.onClosed?.()
              queue.remove(toast.key)
            }}
            hover={hoverState}
            offsetHeight={offsetHeight(toast, index)}
            {...omit(toast, ['key'])}
          />,
        ),
      )}
    </div>
  )
}

export default ToastContainer
