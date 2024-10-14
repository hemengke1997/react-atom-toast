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
    if (!this.container) {
      return
    }

    mount(<ToastContainer toasts={toasts} queue={this.queue} />, this.container)
  }
}
