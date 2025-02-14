import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  registerUser: {},
  message: "",
  token: "",
  isLoading: false,
  isError: false,
  isSuccess: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default authSlice.reducer;
