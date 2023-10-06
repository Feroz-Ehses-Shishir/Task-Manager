import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("fetchData", async () => {
  const response = await axios.get("http://localhost:5000/api/get");
  return await response.data;
});

export const postData = createAsyncThunk("postData", async (payload) => {
  const response = await axios.post("http://localhost:5000/api/save", payload);
  return await response.data;
});

export const deleteData = createAsyncThunk("deleteData", async (id) => {
  const response = await axios.delete(`http://localhost:5000/api/delete/${id}`);
  return await response.data;
});

const taskSlice = createSlice({
  name: "task",
  initialState: {
    list: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(postData.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(deleteData.fulfilled, (state, action) => {
      })
  },
});

export default taskSlice.reducer;
