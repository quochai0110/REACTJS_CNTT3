import React, { useRef } from 'react'

export default function UseRef() {
    let count=0;
    const myRef= useRef(1);
    console.log("giá trị myRef",myRef);

    const handleClick=()=>{
        myRef.current+=1;
        count+=1;

        console.log(myRef.current);
        console.log("count",count);
        
        
    }
  return (
    <div>
      <h1> Học useRef!</h1>
       <p onClick={handleClick}>click</p>
    </div>
  )
}
