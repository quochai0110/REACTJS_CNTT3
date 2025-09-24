import { createSlice } from "@reduxjs/toolkit";
const userSlice= createSlice({
    name:"user",
    initialState:{
        users:[
            {
                id:1,
                name:"Minh Thu"
            },
             {
                id:2,
                name:"Lan Hồng"
            }
        ]
    },
    // reducers: những action 
    reducers:{
        addUser:(state,action)=>{
            // thêm mới user
            console.log("action",action);
            state.users.push(action.payload);
        },
        deleteUser:()=>{

        }
    }
})
// console.log("các action",userSlice.actions);
// destructoring
export const {addUser,deleteUser} = userSlice.actions;

export default userSlice.reducer;