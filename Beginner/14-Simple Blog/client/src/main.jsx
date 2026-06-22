import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DataLayout from './components/DataLayout.jsx'
import {BrowserRouter,Routes,Route} from "react-router-dom"

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Routes>
      <Route path="/"  >
        <Route path='/' element={<App />} />
        <Route path='/:id' element={<DataLayout />} />
      </Route>
      
    </Routes>
  </BrowserRouter>,

)
