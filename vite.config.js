import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [preact()],
  root: './src',
  build: {
    outDir: resolve(__dirname, 'build'),
    emptyOutDir: true,
  },
})
