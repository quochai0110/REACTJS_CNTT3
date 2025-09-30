import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
// THÊM SẢN PHẨM

const addProduct=createAsyncThunk("addProduct",(new_product)=>{

})
const productSlice= createSlice({
    name:"products",
    initialState:{

    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase()
    }
})