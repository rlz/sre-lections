import { defineConfig } from 'vite'
import mdx from '@mdx-js/rollup'
import react from '@vitejs/plugin-react'

export default defineConfig({
    base: './',
    plugins: [mdx(), react({ jsxImportSource: '@emotion/react' })]
})
