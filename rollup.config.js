import cleaner from 'rollup-plugin-cleaner';
import { terser } from 'rollup-plugin-terser';

const commonPlugin = [
  terser({
    ecma: 2022,
    mangle: { toplevel: true },
    compress: {
      module: true,
      toplevel: true,
      unsafe_arrows: true,
      drop_console: true,
      drop_debugger: true
    },
    output: { quote_style: 1 }
  })
];

export default [
  {
    input: './src/index.js',
    output: [
      {
        file: './dist/array-observer.esm.js',
        format: 'es',
        plugins: commonPlugin
      },
      {
        file: './dist/array-observer.cjs.js',
        format: 'cjs'
      },
      {
        name: 'Array',
        file: './dist/array-observer.umd.js',
        format: 'umd',
        plugins: commonPlugin
      }
    ],
    plugins: [
      cleaner({
        targets: ['./dist/']
      })
    ]
  }
];
