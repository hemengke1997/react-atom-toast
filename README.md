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

// There is no built-in styles, you'd customize it yourself
toast.setDefaultOptions({
  className: 'bg-cyan-400 p-2 rounded',
})

toast({
  content: 'Hello, world!',
})
```

### Transition

Transition is powered by [react-transition-preset](https://github.com/hemengke1997/react-transition-preset).

```tsx
import { toast } from 'react-atom-toast'

toast({
  content: 'Hello, world!',
  transition: 'fade-up',
  // or
  // transition: {
  //   name: 'fade-up',
  //   duration: 100,
  // }
})
```

### Single Instance

```tsx
import { toast } from 'react-atom-toast'

toast({
  content: 'Hello, world!',
  maxCount: 1,
  key: 'unique-key',
})
```
