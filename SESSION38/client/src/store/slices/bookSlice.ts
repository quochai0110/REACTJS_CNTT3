import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios"

// TẠO CÁC HÀM LẤY DỮ LIỆU TỪ SERVER
// const API ="http://localhost:8080/books"
export const getAllBook= createAsyncThunk("getAllBook", async ()=>{
    try {
        const response = await axios.get("http://localhost:8080/books");
        return response.data
    } catch (error) {
        console.log(error);
    }
})
// HÀM THÊM SÁCH MỚI 
const bookSlice:any= createSlice({
    name:"book",
    initialState:{
        books:[],
        loading:true,
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getAllBook.pending,()=>{
            console.log("trạng thái đang lấy dữ liệu!");
        })
        .addCase(getAllBook.fulfilled,(state:any, action)=>{
            console.log("trạng thái lấy dữ liệu thành công!",action.payload);
            state.books= action.payload;
        })
    }
})
export default bookSlice.reducer;

