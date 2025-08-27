import React, { useState } from 'react'

export default function UseState() {
    // destructoring
    const numbers:number[]=[1,2,3,4];
    const [x,y]= numbers;
    const [number,setNumber12]= useState<number>(11);
    const [name, setName]= useState<string>("Minh Thu");
   
  const increase=()=>{
        setNumber12(number+1);
  }
//   console.log("component_re_render!");
  
  return (
    <div>
      <h1> Học useState</h1>
      <p> giá trị số : {number}</p>
      <button onClick={increase}>click</button>
    </div>
  )
}
