import axios from "axios";
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_API_URL,
});
export default axiosInstance;
