import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { routers } from './routers/router'

export default function App() {
  return (
    <div>
      REACT-ROUTER-DOM
      <RouterProvider router={routers}/>
    </div>
  )
}
