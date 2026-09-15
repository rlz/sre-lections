import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { SlidesThemeProvider } from 'web-slides'
import { App } from './App'
import './styles.css'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <SlidesThemeProvider
            theme={{
                colors: {
                    'accent-1': 'oklch(64.8% 0.2 131.684)',
                    'accent-2': 'oklch(54.6% 0.245 262.881)',
                    'accent-3': 'oklch(58.6% 0.253 17.585)',
                    dark: 'oklch(12.9% 0.042 264.695)',
                    light: 'oklch(98.4% 0.003 247.858)',
                    muted: 'oklch(55.4% 0.046 257.417)'
                }
            }}
        >
            <App />
        </SlidesThemeProvider>
    </StrictMode>
)
