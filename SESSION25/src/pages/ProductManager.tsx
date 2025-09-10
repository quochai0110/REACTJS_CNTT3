import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const data = [
  {
    id: 1,
    name: "Iphone 15",
    price: 5000,
  },
  {
    id: 2,
    name: "Iphone 16",
    price: 15000,
  },
  {
    id: 3,
    name: "Iphone 17",
    price: 25000,
  },
];

export default function ProductManager() {
  const [products, setProducts] = useState<any>(data);
  const navigate123 = useNavigate();
  const handleClick=(id:any)=>{
    console.log("id",id);
    
    navigate123(`/admin/product/${id}`)
    
  }
  return (
    <div>
      Trang quản lý sản phẩm
      <h1> DANH SÁCH SẢN PHẨM</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>STT</th>
            <th>TÊN</th>
            <th>GIÁ</th>
            <th>HÀNH ĐỘNG</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item: any, index: number) => {
            return (
              <tr>
                <td>{index+1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td><button onClick={()=>handleClick(item.id)}>XEM CHI TIẾT</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
