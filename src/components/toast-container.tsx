import { Fragment, useState } from 'react'
import { useMemoizedFn } from '@/hooks/use-memoized-fn'
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

  const onEnter = useMemoizedFn((key: string, height: number) => {
    setHeightMap((prev) => {
      prev.set(key, height)
      return new Map(prev)
    })
  })

  const onUpdate = useMemoizedFn(onEnter)

  const onExited = useMemoizedFn((key: string) => {
    setHeightMap((prev) => {
      prev.delete(key)
      return new Map(prev)
    })
  })

  const offsetHeight = useMemoizedFn((toast: InternalToastOptions) => {
    const index = toasts.findIndex((t) => t.key === toast.key)

    let offset = 0
    const start = toasts.length - 1

    for (let i = start; i > index; i--) {
      const currentToastHeight = heightMap.get(toasts[i].key!) || 0
      const nextToastHeight = heightMap.get(toasts[i - 1].key!) || 0
      offset += nextToastHeight / 2 + currentToastHeight / 2 + toasts[index].gap!
    }

    return offset
  })

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
      {toasts.map((toast) => (
        <Fragment key={toast.key}>
          {toast.render!(
            <Toast
              {...omit(toast, ['key'])}
              onOpenChange={(open) => onOpenChange(toast.key!, open)}
              onEnter={(height) => {
                onEnter(toast.key!, height)
              }}
              onUpdate={(height) => {
                onUpdate(toast.key!, height)
              }}
              onExited={() => {
                onExited(toast.key!)
              }}
              onClosed={() => {
                toast.onClosed?.()
                onClosed(toast.key!)
              }}
              hover={hoverState}
              offsetHeight={offsetHeight(toast)}
            />,
          )}
        </Fragment>
      ))}
    </div>
  )
}

export default ToastContainer
