import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://socket-chat-backend-purr.onrender.com/api",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      // config.headers.Authorization = `Bearer ${token}`;
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // toast.success(response.data.message);
    return response;
  },
  (error) => {
    if (error) {
      console.log(error, "InterCeptors");
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
