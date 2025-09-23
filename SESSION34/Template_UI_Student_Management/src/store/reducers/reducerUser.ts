import type { Action, Student } from "../../utils/types";

const initialState:Student[] = [
  { id: "SV0011", name: "Nguyễn Văn A123", age: 20, gender: "Nam" },
  { id: "SV0022", name: "Nguyễn Văn B", age: 21, gender: "Nữ" },
  { id: "SV003", name: "Nguyễn Văn C", age: 19, gender: "Nam" },
];
export const reducerUser = (state=initialState, action:Action) => {
  switch (action.type) {
    case "ADD":
        console.log('thêm sinh viên 11');
      return [...state,action.payload];
    case "SEARCH":
      return state;
    case "DELETE":
      return state;
    default:
      return state;
  }
};
