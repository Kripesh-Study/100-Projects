import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route,Routes } from 'react-router'
import './index.css'
import App from './App.jsx'
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'
import Dashboard from './components/Dashboard.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Signup />} />
        <Route path='signup' element={<Signup />} />
        <Route path='login' element={<Login />} />
        <Route path='dashboard' element={<Dashboard />} />
      </Route>
    </Routes>
  </BrowserRouter>,
)
