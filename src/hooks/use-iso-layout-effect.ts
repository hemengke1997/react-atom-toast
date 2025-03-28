import { useEffect, useLayoutEffect } from 'react'
import { isBrowser } from '../utils'

const useIsoLayoutEffect = isBrowser() ? useLayoutEffect : useEffect

export { useIsoLayoutEffect }
