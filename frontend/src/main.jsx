import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<Login />
    },
    {
      path:"/login",
      element:<Login />
    },
    {
      path:"/signup",
      element:<Signup />
    },
    {
      path:"/home",
      element:<Home />
    }
  ]
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />    
  </StrictMode>,
)
