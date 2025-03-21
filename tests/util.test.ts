/**
 * @vitest-environment happy-dom
 */

import { beforeEach, describe, expect, it, type MockInstance, vi } from 'vitest'
import { Renderer } from '@/renderer'
import { Toast } from '@/Toast'
import { ToastQueue } from '@/toast-queue'
import { classnames, defaults, isBrowser, isFunction, omit, secToMs } from '@/utils'

describe('util', () => {
  it('should in browser', () => {
    expect(isBrowser()).toBe(true)
  })

  it('should be function', () => {
    expect(isFunction(() => {})).toBe(true)
  })

  it('should omit', () => {
    expect(omit({ a: 1, b: 2, c: 3 }, ['a', 'b'])).toEqual({ c: 3 })
  })

  it('should return classnames', () => {
    expect(classnames('a', 'b', 'c')).toBe('a b c')
  })

  it('defaults', () => {
    expect(defaults({ a: 1 }, { a: 2, b: 3 })).toMatchObject({ a: 1, b: 3 })

    expect(defaults({ a: 1, b: 2 }, { b: 3 })).toMatchObject({ a: 1, b: 2 })
  })

  it('should convert seconds to milliseconds', () => {
    expect(secToMs(1)).toBe(1000)
    expect(secToMs(0.5)).toBe(500)
    expect(secToMs(undefined)).toBe(0)
  })
})

describe('toast queue', () => {
  const toast = new ToastQueue()

  const spy = vi.spyOn(toast, 'render').mockImplementation(() => {})

  beforeEach(() => {
    toast.removeAll()
    spy.mockClear()
  })

  it('should add toast', () => {
    toast.add({ content: 'hello' })
    expect(toast['toasts'].length).toBe(1)
    expect(spy).toHaveBeenCalled()
  })

  it('should remove all toast', () => {
    toast.add({ content: 'hello' })
    toast.add({ content: 'world' })
    expect(toast['toasts'].length).toBe(2)
    expect(spy).toHaveBeenCalledTimes(2)
    toast.removeAll()
    expect(toast['toasts'].length).toBe(0)
  })

  it('should remove toast', () => {
    toast.add({ content: 'hello' })
    toast.add({ content: 'world' })
    expect(toast['toasts'].length).toBe(2)
    expect(spy).toHaveBeenCalledTimes(2)
    toast.remove(toast['toasts'][0].key)
    expect(toast['toasts'].length).toBe(1)
    expect(spy).toHaveBeenCalledTimes(3)
  })

  it('should remove specific toast', () => {
    toast.add({ content: 'hello', key: '1' })
    expect(toast['toasts'].length).toBe(1)
    expect(spy).toHaveBeenCalledTimes(1)
    toast.remove('1')
    expect(toast['toasts'].length).toBe(0)
    expect(spy).toHaveBeenCalledTimes(2)
  })

  it('should update toast', () => {
    toast.add({ content: 'hello', key: '1' })
    expect(toast['toasts'][0].content).toBe('hello')
    expect(spy).toHaveBeenCalledTimes(1)

    toast.update('1', { content: 'world' })
    expect(toast['toasts'][0].content).toBe('world')
    expect(spy).toHaveBeenCalledTimes(2)
  })
})

describe('render', () => {
  let renderer: Renderer
  let spy: MockInstance

  beforeEach(() => {
    renderer = new Renderer(new ToastQueue())
    spy = vi.spyOn(renderer, 'reactMount').mockImplementation(() => {})
  })

  it('should init with toast queue', () => {
    expect(renderer).toBeDefined()
  })

  it('should create container', () => {
    renderer.createContainer()
    expect(renderer['container']).toBeDefined()
  })

  it('should render', () => {
    renderer.render([])
    expect(spy).toHaveBeenCalled()
  })

  it('should render', () => {
    renderer.render([{ key: '1', content: 'hello' }])
    expect(spy).toHaveBeenCalled()
  })
})

describe('Toast', () => {
  let toast = new Toast()
  beforeEach(() => {
    toast = new Toast()
  })

  it('should toastQueue instanceof ToastQueue', () => {
    expect(toast['toastQueue']).toBeInstanceOf(ToastQueue)
  })

  it('should open toast', () => {
    toast.open('hello')
    const current = toast['toastQueue']['toasts']
    expect(current.length).toBe(1)
    expect(current[0].content).toBe('hello')
    expect(current[0]).toMatchObject(toast['defaultOptions'])
  })

  it('should close toast', () => {
    toast.open({
      content: 'hello',
      key: '1',
    })
    toast.close('1')
    expect(toast['toastQueue']['toasts'][0].open).toBe(false)
  })

  it('should close all toast', () => {
    toast.open('hello')
    toast.open('world')
    toast.closeAll()
    expect(toast['toastQueue']['toasts'].every((t) => !t.open)).toBe(true)
  })

  it('should update toast', () => {
    toast.open({
      content: 'hello',
      key: '1',
    })
    toast.update('1', { content: 'world' })
    expect(toast['toastQueue']['toasts'][0].content).toBe('world')
  })

  it('should set default options', () => {
    toast.setDefaultOptions({ duration: 3 })
    expect(toast['defaultOptions'].duration).toBe(3)
  })
})
