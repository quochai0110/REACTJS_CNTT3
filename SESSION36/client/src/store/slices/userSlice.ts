import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import type { User } from "../../utils/types";

// LẤY DỮ LIỆU TỪ SERVER
export const getAllUser = createAsyncThunk("getAllUser", async () => {
  try {
    const response = await axios.get("http://localhost:8080/users");
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
});
// XÓA USER
export const deleteUser = createAsyncThunk("deleteUser", async (id: number) => {
  try {
    const response = await axios.delete(`http://localhost:8080/users/${id}`);
    return id;
  } catch (error) {}
});
const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [
      {
        id: 1,
        name: "Lan Hồng",
      },
    ],
  },
  reducers: {
    // các action
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllUser.pending, () => {})
      .addCase(getAllUser.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter((item) => {
          return item.id != action.payload;
        });
      });
  },
});

export default userSlice.reducer;
