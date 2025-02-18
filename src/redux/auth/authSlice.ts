import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { loginUser, registerUser } from "./authService";
import { User, UserInfo } from "@/type";

interface InitialState {
  user: {};
  registerUser: {};
  message: string;
  token: string;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
}
const initialState: InitialState = {
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
  extraReducers: (builder) => {
    builder
      // Register User AddCase
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.registerUser = action.payload;
        state.token = action.payload.token;
        localStorage.setItem("token", state.token);
        state.isError = false;
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      })


      // Login user
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.token = action.payload.token;
        localStorage.setItem("token", state.token);
        state.isError = false
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      })
  },
});

export const register = createAsyncThunk(
  "REGISTER/USER",
  async (userInfo: UserInfo) => {
    try {
      return await registerUser(userInfo);
    } catch (error) {
      console.log(error);
    }
  }
);

export const login = createAsyncThunk("LOGIN/USER", async (user: User) => {
  try {
    console.log(user)
    return await loginUser(user);
  } catch (error) {
    console.log(error);
  }
});

export default authSlice.reducer;
