import { useCallback, useState } from 'react'
import { type InternalToastOptions } from '../types'
import { omit } from '../utils'
import Toast from './toast'

type Props = {
  toasts: InternalToastOptions[]
  onClosed: (key: string) => void
  onOpenChange: (key: string, open: boolean) => void
}

function ToastContainer(props: Props) {
  const { toasts, onClosed, onOpenChange } = props

  const [hoverState, setHoverState] = useState(false)
  const [heightMap, setHeightMap] = useState(new Map<string, number>())

  const onEnter = useCallback((key: string, height: number) => {
    setHeightMap((prev) => {
      prev.set(key, height)
      return new Map(prev)
    })
  }, [])

  const onUpdate = onEnter

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
        const currentToastHeight = heightMap.get(toasts[i].key!) || 0
        const nextToastHeight = heightMap.get(toasts[i - 1].key!) || 0
        offset += nextToastHeight / 2 + currentToastHeight / 2 + toasts[index].gap!
      }

      return offset
    },
    [heightMap, toasts],
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
        toast.render!(
          <Toast
            {...omit(toast, ['key'])}
            key={toast.key}
            onOpenChange={(open) => onOpenChange(toast.key!, open)}
            onEnter={(height) => {
              onEnter(toast.key!, height)
            }}
            onUpdate={(height) => {
              onUpdate(toast.key!, height)
            }}
            onExit={() => {
              onExit(toast.key!)
            }}
            onClosed={() => {
              toast.onClosed?.()
              onClosed(toast.key!)
            }}
            hover={hoverState}
            offsetHeight={offsetHeight(toast, index)}
          />,
        ),
      )}
    </div>
  )
}

export default ToastContainer
