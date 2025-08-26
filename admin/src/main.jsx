import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MainContext } from './config/MainContext.jsx'

createRoot(document.getElementById('root')).render(
  <MainContext>
    <StrictMode>
      <App />
    </StrictMode>
  </MainContext>
)
