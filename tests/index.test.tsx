import { act, cleanup, render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { Toast, toast, type ToastOptions } from '../src'

const TestComponent = (props: ToastOptions) => {
  return (
    <button
      data-testid='button'
      onClick={() => {
        act(() => {
          toast.open(props)
        })
      }}
    >
      Open
    </button>
  )
}

describe('Toast', () => {
  beforeEach(() => {
    toast.setDefaultOptions({
      duration: 2,
    })
    vi.useFakeTimers()
  })

  afterEach(() => {
    act(() => {
      toast.closeAll()
    })
    vi.runAllTimers()
    vi.useRealTimers()
    cleanup()
  })

  it('should open a toast with content', () => {
    const content = 'Hello, world!'

    const { queryByTestId, queryByText } = render(<TestComponent content={content} />)

    act(() => {
      queryByTestId('button')?.click()
    })

    expect(queryByText(content)).toBeTruthy()

    // For delayClear timeout
    act(() => {
      vi.runAllTimers()
    })

    // For react-transition-preset
    act(() => {
      vi.runAllTimers()
    })

    expect(queryByText(content)).toBeNull()
  })

  it('should maxCount work', () => {
    const content = 'Hello, world!'

    const { queryByTestId, queryAllByText, rerender } = render(<TestComponent content={content} />)

    act(() => {
      Array(5)
        .fill(0)
        .forEach(() => {
          queryByTestId('button')?.click()
        })
    })

    expect(queryAllByText(content)).toHaveLength(3)

    rerender(<TestComponent content={content} maxCount={1} />)

    act(() => {
      Array(5)
        .fill(0)
        .forEach(() => {
          queryByTestId('button')?.click()
        })
    })

    expect(queryAllByText(content)).toHaveLength(1)
  })

  it('should pauseOnHover work', () => {
    const content = 'Hello, world!'

    const { queryByTestId, queryByText } = render(<TestComponent pauseOnHover={true} content={content} />)

    act(() => {
      queryByTestId('button')?.click()
    })

    expect(queryByText(content)).toBeTruthy()

    act(() => {
      userEvent.hover(queryByText(content)!)
    })

    act(() => {
      vi.advanceTimersByTime(10000)
    })

    expect(queryByText(content)).toBeTruthy()

    act(() => {
      userEvent.unhover(queryByText(content)!)
    })

    act(() => {
      vi.runAllTimers()
    })

    expect(queryByText(content)).toBeNull()
  })

  it('should gap work', () => {
    const content = 'Hello, world!'

    const { queryByTestId, queryAllByText } = render(<TestComponent gap={32} content={content} />)

    act(() => {
      queryByTestId('button')?.click()
      queryByTestId('button')?.click()
    })

    expect(window.getComputedStyle(queryAllByText(content)[0]).transform).toBe('translate(-50%, calc(-50% - 32px))')
    expect(window.getComputedStyle(queryAllByText(content)[1]).transform).toBe('translate(-50%, calc(-50% - 0px))')
  })

  it('should render work', () => {
    const content = 'Hello, world!'

    const { queryByTestId, queryByText } = render(
      <TestComponent
        content={content}
        render={(node) => (
          <div>
            Out Render
            {node}
          </div>
        )}
      />,
    )

    act(() => {
      queryByTestId('button')?.click()
    })

    expect(queryByText('Out Render')).toBeTruthy()
  })

  it('should style work', () => {
    toast.setDefaultOptions({
      style: {
        color: 'rgb(255, 0, 0)',
      },
      className: 'custom-class',
    })

    const content = 'Hello, world!'
    const { queryByTestId, queryByText } = render(<TestComponent content={content} />)

    act(() => {
      queryByTestId('button')?.click()
    })

    expect(window.getComputedStyle(queryByText(content)!).color).toBe('rgb(255, 0, 0)')
    expect(queryByText(content)?.className).toContain('custom-class')
  })

  it('should transition work', () => {
    const content = 'Hello, world!'

    const { queryByTestId, queryByText } = render(<TestComponent content={content} transition='fade' />)

    act(() => {
      queryByTestId('button')?.click()
    })

    expect(window.getComputedStyle(queryByText(content)!).opacity).toBe('0')

    act(() => {
      vi.runAllTimers()
    })

    expect(window.getComputedStyle(queryByText(content)!).opacity).toBe('1')
  })

  it('should onClosed work', () => {
    const content = 'Hello, world!'

    const onClosed = vi.fn()

    const { queryByTestId } = render(<TestComponent content={content} onClosed={onClosed} />)

    act(() => {
      queryByTestId('button')?.click()
    })

    expect(onClosed).not.toHaveBeenCalled()

    act(() => {
      vi.runAllTimers()
    })

    expect(onClosed).not.toHaveBeenCalled()

    act(() => {
      vi.runAllTimers()
    })

    expect(onClosed).toHaveBeenCalled()
  })

  it('extension Toast class', () => {
    const content = 'Hello, world!'

    class MyToast extends Toast {
      constructor() {
        super()
      }
      info() {
        this.open({
          content,
          className: 'info-class',
          style: {
            color: 'blue',
          },
        })
      }
    }

    const myToast = new MyToast()

    const TestComponent = () => {
      return (
        <button
          data-testid='button'
          onClick={() => {
            act(() => {
              myToast.info()
            })
          }}
        >
          Open
        </button>
      )
    }

    const { queryByTestId, queryByText } = render(<TestComponent />)

    act(() => {
      queryByTestId('button')?.click()
    })

    expect(queryByText(content)).toBeTruthy()
    expect(queryByText(content)?.className).toContain('info-class')
    expect(window.getComputedStyle(queryByText(content)!).color).toBe('rgb(0, 0, 255)')
  })
})
