import React, { useState } from "react";

function Baitap4() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  let a=0
  const changeName =(e:React.ChangeEvent<HTMLInputElement>)=>{
      setName(e.target.value)
      if(name ===""){
         setNameError("truong nay khong duoc de trong")
         return
      }
      a=a+1;

  }
  const changeEmail=(e:React.ChangeEvent<HTMLInputElement>)=>{
      setEmail(e.target.value)
      if(!email.includes("@") && email.endsWith(".com")){
        setEmailError("Email khong hop le")
        return
      }
      a=a+1;
  }
  const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
      if(a===2){
         alert("thanh cong")
      }
  }
  return (
    <>
      <div>
        <h2>dang ki thong tin</h2>
      </div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input onChange={changeName  } type="text" value={name}/> <br />
        {nameError}
        <label htmlFor="">Email</label>
        <input type="text" onChange={changeEmail}/>
        {emailError}
        <button >gui</button>
      </form>
    </>
  );
}
export default Baitap4;
