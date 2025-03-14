import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "https://backend-chatapp-qfpy.onrender.com/api"
      : "/api",
  withCredentials: true,
});
