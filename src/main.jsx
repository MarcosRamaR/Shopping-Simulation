import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ShoppingApp } from './ShoppingApp'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <ShoppingApp/>
    </StrictMode>
  </BrowserRouter>,
)
