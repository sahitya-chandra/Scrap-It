import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://oauth.reddit.com',
    withCredentials: true
})

export default axiosInstance;