import { useRef } from 'react'
import { Transition } from 'react-transition-preset'
import { useControlledState } from '@/hooks/use-controlled-state'
import { useIsoLayoutEffect } from '@/hooks/use-iso-layout-effect'
import { useMemoizedFn } from '@/hooks/use-memoized-fn'
import { useUpdateIsoLayoutEffect } from '@/hooks/use-update-iso-layout-effect'
import { type InternalToastOptions } from '@/types'
import { classnames, secToMs } from '@/utils'

type Props = InternalToastOptions & {
  onOpenChange: (open: boolean) => void
  onEnter: (height: number) => void
  onUpdate: (height: number) => void
  onExited: (height: number) => void
  offsetHeight: number
  hover: boolean
}

function Toast(props: Props) {
  const {
    content,
    className,
    style,
    duration,
    onOpenChange,
    onClosed,
    pauseOnHover,
    hover,
    updateFlag,
    transition: _transition,
    open: _open,
    onEnter: _onEnter,
    onUpdate: _onUpdate,
    onExited: _onExited,
    offsetHeight,
  } = props

  const didMount = useRef(false)

  const transition = useMemoizedFn(() => {
    if (typeof _transition === 'string') {
      return { transition: _transition }
    }
    return {
      transition: _transition?.name,
      duration: _transition?.duration,
      exitDuration: _transition?.exitDuration,
    }
  })

  const timer = useRef<number>()
  const ref = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useControlledState({
    defaultValue: !!_open,
    value: _open,
    onChange: (value) => {
      onOpenChange(value)
    },
  })

  const delayClear = useMemoizedFn(() => {
    if (pauseOnHover) {
      if (hover) {
        timer.current && clearTimeout(timer.current)
        return
      }
    }

    if (duration) {
      timer.current && clearTimeout(timer.current)
      timer.current = window.setTimeout(() => {
        setOpen(false)
        timer.current && clearTimeout(timer.current)
      }, secToMs(duration))
    }
  })

  useUpdateIsoLayoutEffect(() => {
    if (!open) return
    delayClear()
  }, [hover])

  const onEnter = useMemoizedFn(() => {
    if (!ref.current) return
    const height = ref.current.clientHeight
    _onEnter(height)
  })

  const onUpdate = useMemoizedFn(() => {
    const height = ref.current?.clientHeight
    _onUpdate(height || 0)
  })

  const onExited = useMemoizedFn(() => {
    const height = ref.current?.clientHeight
    _onExited(height || 0)
    onClosed?.()
  })

  const resolveTransform = useMemoizedFn((transform: string | undefined, offsetHeight: number) => {
    const internalTransform = `translate(-50%, calc(-50% - ${offsetHeight}px))`
    return [internalTransform, transform].filter(Boolean).join(' ')
  })

  const resolveTransformProperty = useMemoizedFn((transform: string | undefined) => {
    return [...new Set(['transform', transform])].filter(Boolean).join(', ')
  })

  useIsoLayoutEffect(() => {
    if (!open) return

    if (!didMount.current) {
      didMount.current = true
    } else {
      onUpdate()
    }

    delayClear()
    return () => {
      timer.current && clearTimeout(timer.current)
    }
  }, [updateFlag])

  useIsoLayoutEffect(() => {
    if (!content) {
      onExited()
    }
  }, [content])

  return (
    <Transition mounted={open} {...transition()} onEnter={onEnter} onExited={onExited} initial={true}>
      {(styles) => (
        <div
          style={{
            position: 'fixed',
            zIndex: 9999,
            top: '50%',
            left: '50%',
            ...style,
            ...styles,
            transitionProperty: resolveTransformProperty(styles.transitionProperty),
            transform: resolveTransform(styles.transform, offsetHeight),
          }}
          ref={ref}
          className={classnames('toast__content', className)}
        >
          {content}
        </div>
      )}
    </Transition>
  )
}

export default Toast
