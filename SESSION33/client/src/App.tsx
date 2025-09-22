import React from "react";
import "./App.css"
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
export default function App() {
  return (
    <div className="container">
      <div className="page-header">
        <h1>Shopping Cart</h1>
      </div>
      <div className="row">
        {/* DANH SÁCH SẢN PHẨM */}
        <ProductList></ProductList>
        {/* CART */}
        <Cart></Cart>
      
      </div>
    </div>
  );
}
