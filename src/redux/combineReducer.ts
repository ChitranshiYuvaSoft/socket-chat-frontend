import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import messageReducer from "./message/messageSlice";
const rootReducer = combineReducers({
  auth: authReducer,
  message: messageReducer
});

export default rootReducer;
