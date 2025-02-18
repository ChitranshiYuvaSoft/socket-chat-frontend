import axiosInstance from "../services/axiosServiceHandler";

export const getMessage = async (token) => {
  const response = await axiosInstance.get(`/messages`);
  console.log(response.data);
  return response.data;
};
