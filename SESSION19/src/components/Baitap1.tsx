import React, { useMemo } from 'react'

export default function Baitap1() {
    const cartItems=[
        {
            id:1,
            name:"sản phẩm A",
            price:5000,
            quantity:2
        },
        {
            id:2,
            name:"sản phẩm B",
            price:8000,
            quantity:3
        }
    ]
    const totalOrder =useMemo(()=>{
        return cartItems.reduce((acc,curentValue)=>{
            return acc+ curentValue.price * curentValue.quantity
        },0)
    },[cartItems])
  return (
    <div>
      <h1>Bài tập 1</h1>
      <h2>Danh sách sản phẩm trong giỏ hàng</h2>
      <ul>
        {cartItems.map((item,index)=>{
            return <li key={index}>
                 Tên sản phẩm : {item.name} _ 
                 số lượng sản phẩm:  {item.quantity} _ 
                 giá : {item.price} _
            </li>
        })}
      </ul>
      <p> giá trị đơn hàng là : {totalOrder}</p>
    </div>
  )
}
