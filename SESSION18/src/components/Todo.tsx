import { useReducer } from "react";

type Job = {
  id: number;
  name: string;
  completed: boolean;
};
export default function Todo() {
  // khởi tạo state
  const initialJob = {
    jobs: [
      {
        id: 1,
        name: "học react hook",
        completed: true,
      },
      {
        id: 2,
        name: "học python",
        completed: false,
      },
    ],
    taskName: "",
  };
  // tạo hàm reducer
  const todoReducer = (state: any, action: any) => {
    
    switch (action.type) {
      case "ADD":
        return {jobs:[...state.jobs,action.payload]}
      case "DELETE":
        // xóa công việc
        return {jobs:state.jobs.filter((item:Job)=>item.id!=action.payload)}
       

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(todoReducer, initialJob);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // tên công việc người dùng nhập
    state.taskName = e.target.value;
  };
  const addTodo = () => {
    // tạo công việc mới
    let newJob = {
      id: state.jobs.length + 1,
      name: state.taskName,
      completed: false,
    };
    dispatch({ type: "ADD", payload: newJob });
  };
  // hàm xóa công việc
  const deleteJob=(id:number)=>{
        dispatch({type:"DELETE",payload:id});
  }
  return (
    <div>
      <h1>ứng dụng todo</h1>
      <input
        type="text"
        placeholder="nhập tên công việc"
        onChange={handleChange}
      />
      <button onClick={addTodo}>Thêm công việc</button>
      <h2>Danh sách công việc</h2>
      {state.jobs.map((item: Job, index: number) => {
        return (
          <li key={index}>
            {item.name}
            <button onClick={()=>deleteJob(item.id)}>xóa</button>
            <button>sửa</button>
          </li>
        );
      })}
    </div>
  );
}
