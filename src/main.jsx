import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Card from './components/Card.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { enrutador } from './routes/enrutador.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={createBrowserRouter(enrutador)}/> 
  </StrictMode>,
)
