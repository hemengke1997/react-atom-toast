import { type CSSProperties, type ReactNode } from 'react'
import { type PresetTransitionName } from 'react-transition-preset'

export interface Options {
  duration?: number
  onClosed?: () => void
  transition?:
    | PresetTransitionName
    | {
        name?: PresetTransitionName
        duration?: number
        exitDuration?: number
      }
  pauseOnHover?: boolean
  className?: string
  style?: CSSProperties
  maxCount?: number
  gap?: number
  render?: (children: ReactNode) => ReactNode
}

export interface ToastOptions extends Options {
  content: ReactNode
  key?: string
}

export interface ToastUpdateOptions extends Options {
  content?: ReactNode
}

export interface InternalToastOptions extends Omit<ToastOptions, 'content'> {
  open?: boolean
  height?: number
  content?: ReactNode
  updateFlag?: boolean
}
