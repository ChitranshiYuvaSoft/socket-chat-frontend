import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMessage } from "./messageService";

interface InitialState {
  userMessage: [];
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
}

const initialState: InitialState = {
  userMessage: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const messages = createAsyncThunk("GET/MESSAGE", async () => {
  try {
    return await getMessage();
  } catch (error) {
    console.log(error);
  }
});

export default messageSlice.reducer;
