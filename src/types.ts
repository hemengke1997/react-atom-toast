import { type CSSProperties, type ReactNode } from 'react'
import { type TransitionName } from 'react-transition-preset/types'

export interface Options {
  /**
   * @description Duration of the toast (s)
   * @default 2
   */
  duration?: number
  /**
   * @description Callback when the toast is closed
   */
  onClosed?: () => void
  /**
   * @description The transition of the toast.
   * @default 'fade'
   *
   * @link  Read [react-transition-preset](https://github.com/hemengke1997/react-transition-preset) to learn more.
   */
  transition?:
    | TransitionName
    | {
        name?: TransitionName
        duration?: number
        exitDuration?: number
      }
  /**
   * @description Prevent the toast from disappearing when hovering.
   * @default true
   */
  pauseOnHover?: boolean
  /**
   * @description Maximum number of toasts displayed at the same time
   * @default 3
   */
  maxCount?: number
  /**
   * @description Gap between toasts
   * @default 16
   */
  gap?: number
  /**
   * @description Enhance the rendering of the toast
   */
  render?: (children: ReactNode) => ReactNode
  /**
   * @description The class name of the toast.
   *
   * react-atom-toast is headless, you need to style it
   */
  className?: string
  style?: CSSProperties
}

export interface ToastOptions extends Options {
  /**
   * @description Content of the toast
   */
  content: ReactNode
  /**
   * @description Unique key of the toast
   */
  key?: string
}

export interface ToastUpdateOptions extends Options {
  /**
   * @description Content of the toast
   */
  content?: ReactNode
}

export interface InternalToastOptions extends Omit<ToastOptions, 'content'> {
  open?: boolean
  height?: number
  content?: ReactNode
  updateFlag?: boolean
}
