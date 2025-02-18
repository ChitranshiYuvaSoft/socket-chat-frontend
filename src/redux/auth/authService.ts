import { User, UserInfo } from "@/type";
import axiosInstance from "../services/axiosServiceHandler";
// const api_url = "https://socket-chat-backend-purr.onrender.com/api";

export const registerUser = async (userInfo: UserInfo) => {
  const response = await axiosInstance.post(`/auth/register`, userInfo);
  return response.data;
};

export const loginUser = async (user: User) => {
  const response = await axiosInstance.post(`/auth/login`, user);
  console.log(response.data)
  return response.data;
};
