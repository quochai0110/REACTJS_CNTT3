import React from 'react'
import { useParams } from 'react-router-dom'
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
export default function ProductDetail() {
    const param= useParams();
    console.log("param",param);
    const result= data.filter((item:any)=>item.id==param.id);
    console.log("result",result);
    
    
     
  return (
    <div>
      <h1>Trang chi tiết sản phẩm</h1>
      <h2>tên sản phẩm : {result[0].name}</h2>
    </div>
  )
}
