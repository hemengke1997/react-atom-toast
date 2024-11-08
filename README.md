# react-atom-toast

> Tiny & Headless toast for React

## Install

```bash
npm i react-atom-toast
```

## Usage

### Basic

```tsx
import { toast } from 'react-atom-toast'

// toast is headless, you'd customize it yourself
toast.setDefaultOptions({
  className: 'bg-red p-2 rounded',
})
```

### Transition

Transition is powered by [react-transition-preset](https://github.com/hemengke1997/react-transition-preset).

```tsx
import { toast } from 'react-atom-toast'

toast({
  content: 'Hello, world!',
  transition: 'fade-up',
})
```

### Single Instance

```tsx
import { toast } from 'react-atom-toast'

toast({
  content: 'Hello, world!',
  maxCount: 1,
})
```

## Options

### duration

- **Type:** `number`
- **Default:** `2000`

The duration of the toast.

### className

- **Type:** `string`

The class name of the toast.

react-atom-toast is headless, you need to style it yourself.

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
- **Default:** `fade-up`

The transition of the toast. Read [react-transition-preset](https://github.com/hemengke1997/react-transition-preset) to learn more.

### pauseOnHover

- **Type:** `boolean`
- **Default:** `true`

Prevent the toast from disappearing when hovering.

### maxCount

- **Type:** `number`
- **Default:** `3`

The maximum number of toasts that can be displayed at the same time.

If set to `1`, the new toast will replace the old one.

### gap

- **Type:** `number`
- **Default:** `16`

The gap between toasts.


### render

- **Type:** `(children: ReactNode) => ReactNode`

Enhance the toast rendering. Useful for react context.
