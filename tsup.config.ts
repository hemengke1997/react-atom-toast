import { defineConfig, type Options } from 'tsup'
import { bundleless } from 'tsup-plugin-bundleless'

const commonOptions = (_options: Options): Options => ({
  target: 'es2015',
  dts: true,
  treeshake: true,
  minify: false,
})

export default defineConfig((options) => [
  {
    ...commonOptions(options),
    entry: ['./src/**/*.{ts,tsx}'],
    format: ['esm'],
    platform: 'browser',
    ...bundleless(),
  },
  {
    ...commonOptions(options),
    entry: ['./src/index.ts'],
    format: ['cjs'],
    platform: 'neutral',
  },
])
