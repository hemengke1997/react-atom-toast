import type React from 'react'
import { ToastQueue } from './toast-queue'
import { type Options, type ToastOptions, type ToastUpdateOptions } from './types'
import { omitUndefined } from './utils'

class Toast {
  private defaultOptions: Options = {
    duration: 2000,
    pauseOnHover: true,
    transition: 'fade',
    maxCount: 3,
    gap: 16,
    render: (children) => children,
  }

  private toastQueue: ToastQueue

  constructor() {
    this.toastQueue = new ToastQueue()
  }

  open(options: ToastOptions | React.ReactNode) {
    if (!(options && typeof options === 'object' && 'content' in options)) {
      // options is ReactNode
      options = {
        content: options,
      }
    }

    this.toastQueue.add({
      ...this.defaultOptions,
      ...options,
    })
  }

  close(key: string) {
    this.toastQueue.close(key)
  }

  closeAll() {
    this.toastQueue.closeAll()
  }

  update(key: string, options: ToastUpdateOptions) {
    this.toastQueue.update(key, {
      ...options,
    })
  }

  setDefaultOptions(options: Options) {
    this.defaultOptions = {
      ...this.defaultOptions,
      ...omitUndefined(options),
    }
  }
}

const toast = new Toast()

export { toast }
export { type ToastOptions, type Options, type ToastUpdateOptions }
