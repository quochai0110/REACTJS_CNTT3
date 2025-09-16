import axios from "axios";
import { useEffect, useState, type ChangeEvent } from "react";

interface User {
  id: number;
  email: string;
  name: string;
}
export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName]= useState<string>("");
  // viết hàm lấy tất cả user từ server về thông qua API
  // API lấy tất cả user: http://localhost:8000/users
  async function getAllUser() {
    const res = await axios.get("http://localhost:8000/users");
    console.log("giá trị trả về", res);
    setUsers([...res.data]);
  }

  useEffect(() => {
    getAllUser();
  }, []);
  // Viêt hàm thêm user
  // API thêm user axios.post("http://localhost:8000/users",new_user)
  const addUser= async ()=>{
      const res= await axios.post("http://localhost:8000/users",
        {
          name:name
        }
      )
      setUsers([...users,res.data]);
      setName("");
  }
  return (
    <div>
      <h1> HỌC API</h1>
      <h2>Danh sách user</h2>
      <input value={name} onChange={(e:ChangeEvent<HTMLInputElement>)=>setName(e.target.value)} type="text" placeholder="nhập tên user" />
      <button onClick={addUser}>thêm </button>
      <ul>
        {users.map((user: User, index: number) => {
          return <li key={index}> {user.name}
           <button>xóa</button>
          </li>;
        })}
      </ul>
    </div>
  );
}
