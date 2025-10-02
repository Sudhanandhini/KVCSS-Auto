import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { HashRouter } from 'react-router-dom'   // 👈 Import HashRouter
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// Import Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/KVCSS-Auto">
      <App />
    </BrowserRouter>
  </StrictMode>,
)
