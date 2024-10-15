import { Renderer } from './renderer'
import { type InternalToastOptions } from './types'

export class ToastQueue {
  private renderer: Renderer
  private toasts: InternalToastOptions[] = []

  constructor() {
    this.renderer = new Renderer(this)
  }

  render() {
    this.renderer.render(this.toasts)
  }

  add(options: InternalToastOptions) {
    const { maxCount, key } = options

    if (key && this.toasts.some((t) => t.key === key)) {
      this.update(key, options)
      return
    }

    const visibleToasts = this.toasts.filter((t) => t.open === true)
    if (maxCount && visibleToasts.length >= maxCount) {
      if (maxCount === 1) {
        // There is only one toast, update it
        this.update(visibleToasts[visibleToasts.length - 1].key!, { ...options, open: true })
        return
      } else {
        this.close(visibleToasts[0]?.key)
      }
    }

    const toastOptions: InternalToastOptions = {
      ...options,
      key: options.key || Math.random().toString(36),
      open: true,
    }

    this.toasts.push(toastOptions)
    this.render()
  }

  close(key: string | undefined) {
    if (!key) return
    this.update(key, { open: false })
    this.render()
  }

  closeAll() {
    this.toasts = this.toasts.map((toastOptions) => ({
      ...toastOptions,
      open: false,
    }))
    this.render()
  }

  remove(key: string | undefined) {
    this.toasts = this.toasts.filter((toastOptions) => toastOptions.key !== key)

    this.render()
  }

  removeAll() {
    this.toasts = []
    this.render()
  }

  update(key: string, options: InternalToastOptions) {
    const index = this.toasts.findIndex((toastOptions) => toastOptions.key === key)

    if (index !== -1) {
      this.toasts[index] = {
        ...this.toasts[index],
        ...options,
        updateFlag: !this.toasts[index].updateFlag,
      }
    }

    this.render()
  }
}
