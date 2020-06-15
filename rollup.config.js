import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'

export default [
  {
    input: 'src/processors/index.ts',
    output: [
      {
        entryFileNames: 'processor.es.js',
        dir: './dist',
        format: 'es',
        sourcemap: true,
      },
    ],
    external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
    plugins: [typescript({ target: 'es6' })],
  },
  {
    input: 'src/nodes/index.ts',
    output: [
      {
        entryFileNames: 'entry-[name].js',
        dir: './dist',
        format: 'cjs',
        sourcemap: true,
      },
      {
        entryFileNames: 'entry-[name].es.js',
        dir: './dist',
        format: 'es',
        sourcemap: true,
      },
    ],
    external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
    plugins: [typescript({ target: 'es6' })],
  },
]
