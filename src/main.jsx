import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ShoppingApp } from './ShoppingApp'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShoppingApp/>
  </StrictMode>,
)
