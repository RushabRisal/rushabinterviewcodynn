import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Login } from './routers/Login.tsx'
import './index.css'
// import App from './App.tsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
const router=createBrowserRouter([{
  path:'/',
  element:<Login/>
}])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
