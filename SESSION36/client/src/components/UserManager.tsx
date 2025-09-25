import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, getAllUser } from '../store/slices/userSlice';
import type { State, User } from '../utils/types';

export default function UserManager() {
     const result =useSelector( (state:State)=>{
        return state.users.users
     })
     const dispatch:any= useDispatch();
     useEffect(()=>{
        dispatch(getAllUser());
     },[])
     const handleDelete=(id:number)=>{
       
        dispatch(deleteUser(id));
     }
  return (
    <div>
      <h1> Quản lý người dùng!</h1>
      <ul>
        {result.map((item:User)=>{
            return <li key={item.id}>
                {item.name} 
                <button onClick={()=>handleDelete(item.id)}>xóa</button>
            </li>
        })}
      </ul>
    </div>
  )
}
