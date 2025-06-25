import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Router from './routes'
import './index.css'

const root = document.getElementById('root') as HTMLElement

createRoot(root).render(
  <StrictMode>
    <Router />
  </StrictMode>
)
