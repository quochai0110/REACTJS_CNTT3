import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetail() {
    const param = useParams();
    console.log("param",param);
    
  return (
    <div>
      Trang chi tiết sản phẩm
      <p>sản phẩm có id là  : {param.id}</p>
    </div>
  )
}
