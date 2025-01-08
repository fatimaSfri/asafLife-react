import axios from "axios";


const axiosInstance = axios.create({
    baseURL: "https://asaflife.ir/api", 
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
   timeout: 10000,
});

axiosInstance.interceptors.response.use(
    (response) => {
        return response; 
    },
    (error) => {
        if (error.response) {
            if (error.response.status === 401) {
                if(!window.location.href.includes('/login'))
                    window.location.href = "/login";
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