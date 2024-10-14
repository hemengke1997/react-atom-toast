import { type ReactElement } from 'react'
import { createRoot, type Root } from 'react-dom/client'

// 移植自rc-util: https://github.com/react-component/util/blob/master/src/React/render.ts

const MARK = '__react_root__'

// ========================== Render ==========================
type ContainerType = (Element | DocumentFragment) & {
  [MARK]?: Root
}

export function mount(node: ReactElement, container: ContainerType) {
  const root = container[MARK] || createRoot(container)
  root.render(node)
  container[MARK] = root
}

// ========================== Unmount =========================

export async function unmount(container: ContainerType) {
  // Delay to unmount to avoid React 18 sync warning
  return Promise.resolve().then(() => {
    container[MARK]?.unmount()
    delete container[MARK]
  })
}
