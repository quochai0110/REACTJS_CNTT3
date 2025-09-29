import { configureStore } from "@reduxjs/toolkit";
import books_slice from "./slices/bookSlice"
const store= configureStore({
    reducer:{
        books: books_slice
    }
})
export default store;