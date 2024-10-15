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

export function omitUndefined<T extends Record<string, any>>(obj: T) {
  return omit(
    obj,
    Object.keys(obj).filter((key) => obj[key] === undefined),
  )
}
