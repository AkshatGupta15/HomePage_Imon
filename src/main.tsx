import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from "react-helmet-async";

const base = import.meta.env.BASE_URL

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={base}>
     <HelmetProvider>
      <App />
     </HelmetProvider>
    </BrowserRouter>
  </StrictMode>,
)
