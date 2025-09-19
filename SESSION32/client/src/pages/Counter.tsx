import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
  const result: any = useSelector((data) => {
    return data;
  });
  const dispatch= useDispatch();
  const increase=()=>{
        dispatch({
            type:"INCREASE",
            payload:3
        })
  }
  return (
    <div>
      <h1>ứng dụng đếm số!</h1>
      <p> Gía trị biến đếm counter: {result.counter.counter} </p>
      <button onClick={increase}>tăng</button>
      <button>giảm</button>
    </div>
  );
}
