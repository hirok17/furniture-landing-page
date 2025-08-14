import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import Shop from './pages/Shop.jsx'

const router= createBrowserRouter([
  {
    path:"/", 
    Component:App,
    errorElement:<ErrorPage />,
    children:[
      {
        index:true,
        Component:Home
      },
      {
        path:"/about",
        Component:About
      },
      {
        path:"/contact",
        Component:Contact
      },
      {
        path:"/shop",
        Component:Shop
      }
    ]

  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
