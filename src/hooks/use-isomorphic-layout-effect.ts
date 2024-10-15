import { useEffect, useLayoutEffect } from 'react'
import { isBrowser } from '../utils'

const useIsomorphicLayoutEffect = isBrowser() ? useLayoutEffect : useEffect

export default useIsomorphicLayoutEffect
