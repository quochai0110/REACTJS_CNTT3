import React from "react";
import { useDispatch, useSelector } from "react-redux";
type User = {
  id: number;
  name: string;
};
export default function Student() {
  const dispatch = useDispatch();
  const result = useSelector((data: any) => {
    console.log("data", data);
    return data.users.users;
  });
  return (
    <div>
      <input type="text" />
      <button>thêm sinh viên</button>
      <h1>QUẢN LÝ SINH VIÊN</h1>
      {result.map((item: User, index: any) => {
        return <li key={index}>{item.name}</li>;
      })}
    </div>
  );
}
