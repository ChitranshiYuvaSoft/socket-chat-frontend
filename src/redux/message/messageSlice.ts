import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addMessage, getMessage } from "./messageService";
import { NewMessage } from "@/type";

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
  extraReducers: (builder) => {
    builder
      .addCase(messages.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = true;
      })
      .addCase(messages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.userMessage = action.payload;
        state.isError = false;
      })
      .addCase(messages.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
      })

      //  add Message
      .addCase(newMessageAdd.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(newMessageAdd.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.userMessage = [...state.userMessage, action.payload];
      })
      .addCase(newMessageAdd.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      });
  },
});

export const messages = createAsyncThunk("GET/MESSAGE", async () => {
  try {
    return await getMessage();
  } catch (error) {
    console.log(error);
  }
});

export const newMessageAdd = createAsyncThunk(
  "ADD/MESSAGE",
  async (newMessage: NewMessage) => {
    try {
      return await addMessage(newMessage);
    } catch (error) {
      console.log(error);
    }
  }
);

export default messageSlice.reducer;
