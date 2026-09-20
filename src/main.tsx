import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { SlidesThemeProvider } from 'rlz-web-slides'
import { App } from './App'
import './styles.css'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <SlidesThemeProvider theme={{ radius: 20 }}>
            <App />
        </SlidesThemeProvider>
    </StrictMode>
)
