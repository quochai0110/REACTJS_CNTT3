import React, { useState } from 'react'
import Header from './components/header/Header'

export default function App() {
  const [todos, setTodos]= useState<any>([]);
  const [todo, setTodo]= useState<any>({
      id:1,
      title:"",
      status:false,
  })
  const handleChange=(e:any)=>{
     setTodo({
      id:1,
      title:e.target.value,
      status:false
     })
  }
  const addTodo=()=>{
    setTodos([...todos,todo]);
  }
  console.log(11111,todo);
  
  return (
    <div>
      app <hr />
      <h1> danh sách công việc</h1>
      <ul>
        {todos.map((item:any)=><li>{item.title}</li>)}
      </ul>
      <input type="text"
      onChange={handleChange}
       />
      <button onClick={addTodo}>thêm công việc</button>
      {/* <Header></Header> <hr /> */}
    </div>
  )
}
