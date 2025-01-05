import axios from "axios";
import { useNavigate } from "react-router-dom"; 

const axiosInstance = axios.create({
    baseURL: "https://asaflife.com/api", 
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

axiosInstance.interceptors.response.use(
    (response) => {
        return response; 
    },
    (error) => {
        const navigate = useNavigate(); 

        if (error.response) {
            if (error.response.status === 401) {
                navigate("/login");
            } else if (error.response.status === 400) {
                console.error("Bad Request: ", error.response.data);
            } else if (error.response.status === 500) {
                console.error("Server Error: ", error.response.data);
            }
        } else {
            console.error("Network Error: ", error.message);
        }

        return Promise.reject(error); 
    }
);

export default axiosInstance;
