import React from 'react'
import { useParams } from 'react-router-dom';
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
export default function ProductDetail() {
    const params=useParams();
    console.log(params);
    const result = data.filter((item:any,index:any)=>{
        return item.id == params.id
    })

  return (
    <div>
      <h1>trang chi tiết sản phẩm</h1>
      <div>
        tên sản phẩm:{result[0].name}
        giá sản phẩm:{result[0].price}
      </div>
    </div>
  )
}
