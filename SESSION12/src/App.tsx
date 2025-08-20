import React from "react";

export default function App() {
  const fullName: string = "Nguyễn Minh Hoàng";
  const age: number = 20;
  const isLogin: boolean = false;
  const users: string[] = ["Thu", "Hà", "Nội"];
  const obj = {
    id: "sv1",
    name: "Minh Thu",
    address: "Hà Nội",
  };
  const scores = [
    {
      scores: [7,8,9]
    },
   
  ];

  return (
    <div>
      <p>
        Họ tên : {fullName}, tuổi: {age}{" "}
      </p>
      <p>{isLogin ? "bạn đã đăng nhập" : "bạn chưa đăng nhập"}</p>
      {/* <p> danh sách sinh viên: {users}</p> */}
      <p> Hiển thị object : {JSON.stringify(obj)}</p>
      <ul>
        Danh sách sinh viên
        {users.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ul>
        {scores.map((item,index)=><li key={index}> {item.scores}</li>)}
      </ul>
    </div>
  );
}
