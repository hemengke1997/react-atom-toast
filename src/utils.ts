export function isBrowser() {
  return typeof window !== 'undefined' && typeof document !== 'undefined'
}

export function omit<T extends Record<string, any>>(obj: T, keys: (keyof T)[]) {
  const copy = { ...obj }
  keys.forEach((key) => delete copy[key])
  return copy
}

export const classnames = (...args: (string | undefined)[]) => args.filter(Boolean).join(' ')
