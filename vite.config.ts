import { defineConfig } from 'vite'
import litcss from 'rollup-plugin-postcss-lit'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/my-element.ts',
      name: 'MyElement',
      formats: ['es', 'umd']
    },
    rollupOptions: {
      //external: /^lit/
    }
  },
  plugins: [
    litcss()
  ]
})
