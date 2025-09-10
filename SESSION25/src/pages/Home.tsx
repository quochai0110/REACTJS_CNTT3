import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate();
    const handleClick=()=>{
        navigate("/login");
    }
  return (
    <div>
      <h1>Trang chủ!</h1>
       <header>
         phần đầu!
         <button onClick={handleClick}>đăng nhập!</button>
       </header>
       <main>
         phần nội dung trang!
       </main>
       <footer>
        phần chân trang!
       </footer>
    </div>
  )
}
