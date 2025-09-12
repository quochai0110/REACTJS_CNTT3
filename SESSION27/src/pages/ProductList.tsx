import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const data = [
  {
    id: 1,
    name: "laptop",
    price: 5000,
  },
  {
    id: 2,
    name: "phone",
    price: 10000,
  },
  {
    id: 3,
    name: "headphone",
    price: 200000,
  },
];

export default function ProductList() {
  const [products, setProducts] = useState(data);
  const navigate=useNavigate();
  const handleClick=(id:number)=>{
    navigate(`/products/${id}`)
  }
  return (
    <div>
      <h1>danh sách sản phẩm</h1>
      <div style={{ display: "flex", padding: "20px" }}>
        {products.map((item,index) => {
          return (
            <div style={{ margin: "20px" }} key={index}>
              <p> tên sản phẩm : {item.name}</p>
              <p> giá sản phẩm: {item.price}</p>
            <button onClick={()=>handleClick(item.id)}>  xem chi tiết</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
