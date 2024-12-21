import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://asaflife.com/api", 
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: false,
});


axiosInstance.interceptors.response.use(
    (response) => {
        return response; 
    },
    (error) => {

        if (error.response) {
 
            if (error.response.status === 400) {
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

