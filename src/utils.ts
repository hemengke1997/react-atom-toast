export function isBrowser() {
  return typeof window !== 'undefined' && typeof document !== 'undefined'
}

export function isFunction(value: unknown): value is Function {
  return typeof value === 'function'
}

export function omit<T extends Record<string, any>>(obj: T, keys: (keyof T)[]) {
  const copy = { ...obj }
  keys.forEach((key) => delete copy[key])
  return copy
}

export function classnames(...args: (string | undefined)[]) {
  return args.filter(Boolean).join(' ')
}

export function defaults<T extends Record<string, any>>(options: T, defaultOptions: T): T {
  const result = { ...defaultOptions }
  for (const key in options) {
    if (options[key] !== undefined) {
      result[key] = options[key]
    }
  }
  return result
}

export function secToMs(ms: number | undefined) {
  return (ms || 0) * 1000
}
