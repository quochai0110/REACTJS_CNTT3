import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function HomePage() {
  return (
    <div>
      <h1>Đây là trang Home Page</h1>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <Outlet></Outlet>
    </div>
  )
}
