import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function Admin() {
  return (
    <div>
      <h1> Trang admin!</h1>
      <NavLink to={"/admin/user"}>Quản lý người dùng</NavLink>
      <NavLink to={"/admin/product"}>Quản lý sản phẩm</NavLink>
      <NavLink to={"/admin/order"}>Quản lý hóa đơn</NavLink>
      <hr />
      <Outlet></Outlet>
    </div>
  );
}
