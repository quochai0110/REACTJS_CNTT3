import { useReducer } from "react";
export default function UseReducer() {
  const initialState = {
    count: 0,
  };
  const countReducer = (state: any, action: any) => {
    console.log("action",action);
    if(action.type=="INCREASE"){
        return {count: state.count+action.payload}
    }else if(action=="DECREASE"){
        return {count: state.count-1}
    }
    return state
  };
  const [state, dispatch] = useReducer(countReducer, initialState);
  const increase=()=>{
        dispatch({type:"INCREASE",payload:3});
  }
  const decrease=()=>{
       dispatch("DECREASE");
  }
  return (
    <div>
      <h1>UseReducer</h1>
      <p> giá trị count : {state.count}</p>
      <button onClick={increase} >tăng</button>
      <button onClick={decrease}> giảm </button>
    </div>
  );
}
