# react-atom-toast

> 轻量无头的 React Toast

## 安装

```bash
npm i react-atom-toast
```

## Demo

[在线示例](https://hemengke1997.github.io/react-atom-toast/)

## 使用

### 基础使用

```tsx
import { toast } from 'react-atom-toast'

// toast默认没有样式，需要您自己添加样式
toast.setDefaultOptions({
  className: 'bg-red p-2 rounded',
})

toast.open('Hello, world!')
```

### 过渡动画

过渡动画由 [react-transition-preset](https://github.com/hemengke1997/react-transition-preset) 驱动

```tsx
import { toast } from 'react-atom-toast'

toast({
  content: 'Hello, world!',
  transition: 'fade-up',
})
```

### 单例

```tsx
import { toast } from 'react-atom-toast'

toast({
  content: 'Hello, world!',
  maxCount: 1,
})
```

## 配置项

### duration (s)

- **Type:** `number`
- **Default:** `2`

toast 持续时长

### className

- **Type:** `string`

样式类名

toast 是无样式的，需要您自己添加样式

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

过渡动画，配置项详情参考 [react-transition-preset](https://github.com/hemengke1997/react-transition-preset)

### pauseOnHover

- **Type:** `boolean`
- **Default:** `true`

hover时阻止toast消失

### maxCount

- **Type:** `number`
- **Default:** `3`

同时最多显示的toast数量

如果设置为 `1`，新的toast会替换旧的toast

### gap

- **Type:** `number`
- **Default:** `16`

toast 之间的间距，默认为 `16px`


### render

- **Type:** `(children: ReactNode) => ReactNode`

渲染增强，通常用于react context

## 扩展

虽然 `react-atom-toast` 导出了toast实例，但是您也可以自行扩展 `Toast` 类，比如：

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
```
