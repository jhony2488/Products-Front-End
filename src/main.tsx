import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ContextProvider } from './providers/ContextApi.tsx'; //
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContextProvider>
        <App />
    </ContextProvider>
  </StrictMode>,
)
