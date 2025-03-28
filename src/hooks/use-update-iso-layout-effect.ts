import createUpdateEffect from './create-update-effect'
import { useIsoLayoutEffect } from './use-iso-layout-effect'

const useUpdateIsoLayoutEffect = createUpdateEffect(useIsoLayoutEffect)

export { useUpdateIsoLayoutEffect }
