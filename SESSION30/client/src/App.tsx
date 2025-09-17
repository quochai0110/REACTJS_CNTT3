import axios from "axios";
import { API_GETALLUSER } from "./apis";
import { useEffect, useState, type ChangeEvent } from "react";
import Loading from "./components/Loading";

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}
export default function App() {
  const [users, setUser] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchName, setSearchName] = useState<string>("");
  async function getAllUser() {
    let result: User[] = [];
    try {
      const response = await axios.get(API_GETALLUSER);
      result = response.data;
    } catch (error) {
      console.log("err", error);
    } finally {
      setTimeout(() => {
        setLoading(false);
        setUser([...result]);
      }, 3000);
    }
  }
  useEffect(() => {
    getAllUser();
  }, []);
  // hàm tìm kiếm
  const searchByName = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/users?name_like=${searchName}`
      );
      console.log("res", response);
      setUser([...response.data]);
    } catch (error) {
      console.log("err", error);
    }
  };
  const sortByName = async () => {
    try {
      const value = "desc";
      const response = await axios.get(
        `http://localhost:8080/users?_sort=age&_order=${value}`
      );
      setUser([...response.data]);
    } catch (error) {
      console.log("err", error);
    }
  };
  return (
    <div>
      <h1>API</h1>
      <h2>Danh sách user</h2>
      <button onClick={searchByName}>tìm kiếm</button>
      <button onClick={sortByName}>sắp xếp</button>
      
      <input
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearchName(e.target.value)
        }
        type="text"
      />
       {loading ? <Loading></Loading> : ""}
      <ul>
        {users.map((user: User, index: number) => {
          return (
            <li key={index}>
              tên: {user.name}_ tuổi: {user.age}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
