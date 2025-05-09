# react-atom-toast

> Lightweight and headless React Toast

## Installation

```bash
npm i react-atom-toast
```

## Demo

[Online Example](https://hemengke1997.github.io/react-atom-toast/)

## Usage

### Basic Usage

```tsx
import { toast } from 'react-atom-toast'

// By default, toast has no styles. You need to add your own styles.
toast.setDefaultOptions({
  className: 'bg-red p-2 rounded',
})

toast.open('Hello, world!')
```

### Transition Animations

Transition animations are powered by [react-transition-preset](https://github.com/hemengke1997/react-transition-preset).

```tsx
import { toast } from 'react-atom-toast'

toast({
  content: 'Hello, world!',
  transition: 'fade-up',
})
```

### Singleton

```tsx
import { toast } from 'react-atom-toast'

toast({
  content: 'Hello, world!',
  maxCount: 1,
})
```

## Options

### duration (s)

- **Type:** `number`
- **Default:** `2`

The duration for which the toast is displayed.

### className

- **Type:** `string`

CSS class name.

By default, toast has no styles. You need to add your own styles.

```tsx
import { toast } from 'react-atom-toast'

toast.setDefaultOptions({
  className: 'bg-black bg-opacity-90 p-2 rounded',
})
```

### transition

- **Type:** `PresetTransitionName
    | {
        name?: PresetTransitionName
        duration?: number
        exitDuration?: number
      }`
- **Default:** `fade`

Transition animation. For detailed configuration, refer to [react-transition-preset](https://github.com/hemengke1997/react-transition-preset).

### pauseOnHover

- **Type:** `boolean`
- **Default:** `true`

Prevents the toast from disappearing when hovered.

### maxCount

- **Type:** `number`
- **Default:** `3`

The maximum number of toasts displayed simultaneously.

If set to `1`, new toasts will replace old ones.

### gap

- **Type:** `number`
- **Default:** `16`

The gap between toasts, defaulting to `16px`.

### render

- **Type:** `(children: ReactNode) => ReactNode`

Enhances rendering, typically used with React context.

## Extensions

Although `react-atom-toast` exports a `toast` instance, you can also extend the `Toast` class yourself. For example:

```ts
import { Toast } from 'react-atom-toast'

class MyToast extends Toast {
  constructor() {
    super()
    this.setDefaultOptions({
      className: 'bg-red p-2 rounded',
    })
  }

  info(content: string) {
    this.open({
      content,
      className: 'bg-blue p-2 rounded',
    })
  }
  success(content: string) {
    this.open({
      content,
      className: 'bg-green p-2 rounded',
    })
  }
}
