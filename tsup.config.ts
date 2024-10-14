import { defineConfig, type Options } from 'tsup'
import { bundleless } from 'tsup-plugin-bundleless'

const commonOptions = (options: Options): Options => ({
  target: 'es2015',
  external: ['react', 'react-dom'],
  dts: true,
  treeshake: true,
  minify: false,
  tsconfig: options.watch ? 'tsconfig.dev.json' : 'tsconfig.json',
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
