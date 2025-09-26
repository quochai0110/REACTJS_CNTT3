import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
// HÀM LẤY DATA TỪ SERVER
export const getAllUser = createAsyncThunk("getAllUser", async ()=>{
    try {
        const response= await axios.get("http://localhost:8080/students");
        return response.data;
    } catch (error) {
        console.log(error);
    }

})

//HÀM THÊM MỚI USER
export const addUser = createAsyncThunk("addUser", async (newUser:any)=>{
    try {
        const response = await axios.post("http://localhost:8080/students", newUser);
        console.log(11,response);
        
        return response.data
    } catch (error) {
        
    }
})

//HÀM XÓA USER
export const deleteUser = createAsyncThunk("deleteUSer", async (id:number)=>{
    try {
        const response = await axios.delete(`http://localhost:8080/students/${id}`)
        return id
    } catch (error) {
        
    }
})
const studentSlice= createSlice({
    name:"student",
    initialState:{
        students:[]
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getAllUser.pending,()=>{
            // đang lấy dữ liệu
            console.log("trạng thái đang lấy dữ liệu!");
            
        })
        .addCase(getAllUser.fulfilled,(state, action)=>{
            // lấy dữ liệu thành công
            console.log("trạng thái lấy dữ liệu thành công!");
            state.students=action.payload;
            
        })

        .addCase(addUser.fulfilled, (state:any, action:any)=>{
            console.log(222,action);
            state.students.push(action.payload)
        })

        .addCase(deleteUser.fulfilled, (state, action)=>{
            state.students.filter((d:any)=> d.id !== action.payload)
        })
    }
})
export default studentSlice.reducer;