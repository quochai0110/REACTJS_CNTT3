import React, { useEffect } from 'react'

export default function UseEffect() {

   useEffect(()=>{
    console.log("22222");
    
   },[])
   console.log("11111");
   
  return (
    <div>
      <h1> Học useEffect!</h1>
    </div>
  )
}
