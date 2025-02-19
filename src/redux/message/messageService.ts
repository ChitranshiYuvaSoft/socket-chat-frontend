import { NewMessage } from "@/type";
import axiosInstance from "../services/axiosServiceHandler";

export const getMessage = async () => {
  const response = await axiosInstance.get(`/messages`);
  return response.data;
};

export const addMessage = async (newMessage: NewMessage) => {
  const response = await axiosInstance.post("/messages", newMessage);
  console.log(response);
  return response.data;
};
