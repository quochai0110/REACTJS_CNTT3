import { useRef, useState } from "react"


export default function Baitap3() {
    const[value,setValue]=useState("");
    const renderCount = useRef(0);
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        renderCount.current += 1;
        setValue(e.target.value)
    }
  return (
    <div>
      <h1>Bai tap 3</h1>
      <h2>Component render counter</h2>
        <label htmlFor="">Input:</label>
        <input value={value} onChange={handleChange}/>
        <p>{renderCount.current}</p>
    </div>
  )
}
