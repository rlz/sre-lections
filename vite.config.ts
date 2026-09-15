import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const webSlidesPath = new URL('../web-slides/lib/index.js', import.meta.url)
    .pathname

export default defineConfig({
    base: './',
    plugins: [react({ jsxImportSource: '@emotion/react' })],
    resolve: {
        alias: {
            'web-slides': webSlidesPath
        }
    }
})
