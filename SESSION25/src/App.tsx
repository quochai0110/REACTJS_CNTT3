import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import Admin from './layouts/Admin'
import UserManager from './pages/UserManager'
import ProductManager from './pages/ProductManager'
import OrderManager from './pages/OrderManager'
import "./App.css"
import Login from './pages/Login'
import ProductDetail from './pages/ProductDetail'

export default function App() {

  const routers = createBrowserRouter([
     {
      path:"/",
      element: <Home></Home>
    },
    {
      path:"/about",
      element: <About></About>
    },
    {
      path:"/contact",
      element:<Contact></Contact>
    },
    {
      path:"/admin",
      element:<Admin></Admin>,
      children:[
        {
          path:"user",
          element:<UserManager></UserManager>
        },
          {
          path:"product",
          element:<ProductManager></ProductManager>
        },
        {
          path:"product/:id",
          element:<ProductDetail></ProductDetail>
        },
          {
          path:"order",
          element:<OrderManager></OrderManager>
        }
      ]
    },
    {
      path:"/login",
      element:<Login></Login>
    },
    {
      path:"*",
      element:<NotFound></NotFound>
    }
  ])
  return (
    <div>
      REACT ROUTER!
      <RouterProvider router={routers}></RouterProvider>
    </div>
  )
}
