import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: (import.meta.env.MODE =
    "https://backend-chatapp-qfpy.onrender.com/api"),

  withCredentials: true,
});
