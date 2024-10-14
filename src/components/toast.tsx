import { useMemo, useRef, useState } from 'react'
import { Transition } from 'react-transition-preset'
import useIsomorphicLayoutEffect from '../hooks/useIsomorphicLayoutEffect'
import { type InternalToastOptions } from '../types'
import { classnames } from '../utils'

type Props = InternalToastOptions & {
  onEnter: (height: number) => void
  onExit: (height: number) => void
  offsetHeight: number
  hover: boolean
}

function Toast(props: Props) {
  const {
    content,
    className,
    duration,
    onClosed,
    pauseOnHover,
    hover,
    updateFlag,
    transition: _transition,
    open: _open,
    onEnter: _onEnter,
    onExit: _onExit,
    offsetHeight,
  } = props

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
  const [open, setOpen] = useState(!!_open)

  useIsomorphicLayoutEffect(() => {
    if (typeof _open === 'boolean') {
      setOpen(!!_open)
    }
  }, [_open])

  const delayClear = () => {
    if (duration) {
      timer.current && clearTimeout(timer.current)
      timer.current = window.setTimeout(() => {
        setOpen(false)
      }, +duration!)
    }
  }

  const onMouseHover = (hover: boolean) => {
    if (!pauseOnHover || !open) return
    if (hover) {
      timer.current && clearTimeout(timer.current)
    } else {
      delayClear()
    }
  }

  useIsomorphicLayoutEffect(() => {
    onMouseHover(hover)
  }, [hover])

  const onEnter = () => {
    if (!ref.current) return
    const height = ref.current.clientHeight
    _onEnter(height)
  }

  const onExit = () => {
    const height = ref.current?.clientHeight
    _onExit(height || 0)
  }

  const onExited = () => {
    onClosed?.()
  }

  const resolveTransform = (transform: string | undefined, offsetHeight: number) => {
    const internalTransform = `translate(-50%, calc(-50% - ${offsetHeight}px))`
    return [internalTransform, transform].filter(Boolean).join(' ')
  }

  const resolveTransformProperty = (transform: string | undefined) => {
    return [...new Set(['transform', transform])].filter(Boolean).join(', ')
  }

  useIsomorphicLayoutEffect(() => {
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
