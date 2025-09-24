import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { User } from "../utils/types";
import { addUser } from "../store/slices/userSlice";

export default function UserManager() {
  const [user, setUser] = useState<User>({
    id: Math.floor(Math.random() * 99999),
    name: "",
  });
  const data = useSelector((state: any) => {
    return state.user.users;
  });
  const dispatch= useDispatch();
  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setUser({...user,name:e.target.value})
  }
  const handleClick=()=>{
    console.log("user",user);
        dispatch(addUser(user))
  }
  return (
    <div>
      <h1>Danh sách người dùng!</h1>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>thêm user</button>
      <ol>
        {data.map((item: User, index: number) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ol>
    </div>
  );
}
