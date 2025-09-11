import React from 'react'
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute(props:any) {
  
    let isLogin=true;

    if(!isLogin){
        // chưa đăng nhập, điều hướng người dùng sang trang đăng nhập
       return  <Navigate to="/login"></Navigate>
    }
    return props.element
}
