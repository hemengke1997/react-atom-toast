import ToastContainer from './components/toast-container'
import { mount } from './dom'
import { type ToastQueue } from './toast-queue'
import { type InternalToastOptions } from './types'
import { isBrowser } from './utils'

export class Renderer {
  private containerID = 'react-atom-toast'
  private container: HTMLElement | null = null
  private queue: ToastQueue

  constructor(queue: ToastQueue) {
    this.queue = queue
  }

  createContainer() {
    if (isBrowser()) {
      let container = document.getElementById(this.containerID)

      if (!container) {
        container = document.createElement('div')
        container.id = this.containerID
        document.body.appendChild(container)
      }

      this.container = container
    }
  }

  render(toasts: InternalToastOptions[]) {
    if (!toasts.length && this.container) {
      this.container.remove()
      this.container = null
      return
    }

    this.createContainer()
    if (!this.container) return

    this.reactMount(toasts, this.container)
  }

  reactMount(toasts: InternalToastOptions[], container: HTMLElement) {
    mount(
      <ToastContainer
        toasts={toasts}
        onClosed={(key) => this.queue.remove(key)}
        onOpenChange={(key, open) => {
          this.queue.update(key, { open })
        }}
      />,
      container,
    )
  }
}
