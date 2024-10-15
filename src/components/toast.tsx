import { useCallback, useMemo, useRef } from 'react'
import { Transition } from 'react-transition-preset'
import useControlledState from '../hooks/use-controlled-state'
import useIsomorphicLayoutEffect from '../hooks/use-isomorphic-layout-effect'
import { type InternalToastOptions } from '../types'
import { classnames } from '../utils'

type Props = InternalToastOptions & {
  onOpenChange: (open: boolean) => void
  onEnter: (height: number) => void
  onUpdate: (height: number) => void
  onExit: (height: number) => void
  offsetHeight: number
  hover: boolean
}

function Toast(props: Props) {
  const {
    content,
    className,
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
    onExit: _onExit,
    offsetHeight,
  } = props

  const didMount = useRef(false)

  const transition = useMemo(() => {
    if (typeof _transition === 'string') {
      return { transition: _transition }
    }
    return {
      transition: _transition?.name,
      duration: _transition?.duration,
      exitDuration: _transition?.exitDuration,
    }
  }, [_transition])
  const timer = useRef<number>()
  const ref = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useControlledState({
    defaultValue: !!_open,
    value: _open,
    onChange: (value) => {
      onOpenChange(value)
    },
  })

  const delayClear = useCallback(() => {
    if (duration) {
      timer.current && clearTimeout(timer.current)
      timer.current = window.setTimeout(() => {
        setOpen(false)
      }, +duration!)
    }
  }, [duration, setOpen])

  const onMouseHover = useCallback(
    (hover: boolean) => {
      if (!pauseOnHover || !open) return
      if (hover) {
        timer.current && clearTimeout(timer.current)
      } else {
        delayClear()
      }
    },
    [open, pauseOnHover, delayClear],
  )

  useIsomorphicLayoutEffect(() => {
    onMouseHover(hover)
  }, [hover])

  const onEnter = useCallback(() => {
    if (!ref.current) return
    const height = ref.current.clientHeight
    _onEnter(height)
  }, [_onEnter])

  const onUpdate = useCallback(() => {
    const height = ref.current?.clientHeight
    _onUpdate(height || 0)
  }, [_onUpdate])

  const onExit = useCallback(() => {
    const height = ref.current?.clientHeight
    _onExit(height || 0)
  }, [_onExit])

  const onExited = useCallback(() => {
    onClosed?.()
  }, [onClosed])

  const resolveTransform = useCallback((transform: string | undefined, offsetHeight: number) => {
    const internalTransform = `translate(-50%, calc(-50% - ${offsetHeight}px))`
    return [internalTransform, transform].filter(Boolean).join(' ')
  }, [])

  const resolveTransformProperty = useCallback((transform: string | undefined) => {
    return [...new Set(['transform', transform])].filter(Boolean).join(', ')
  }, [])

  useIsomorphicLayoutEffect(() => {
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

  useIsomorphicLayoutEffect(() => {
    if (!content) {
      onExited()
    }
  }, [content])

  return (
    <Transition mounted={open} {...transition} onEnter={onEnter} onExit={onExit} onExited={onExited} initial={true}>
      {(styles) => (
        <div
          style={{
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
