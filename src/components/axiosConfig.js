import axios from "axios";


const axiosInstance = axios.create({
    baseURL: "https://asaflife.ir/api", 
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
   timeout: 25000,
});

axiosInstance.interceptors.response.use(
    (response) => {
        return response; 
    },
    (error) => {
        console.error("Error in axios response interceptor: ",error);
        if (error.response) {
            if (error.response.status === 401) {
                console.log(window.location.href);
                if(!window.location.href.includes('/login') )
                    window.location.href = "/login";
            } else if (error.response.status === 400) {
                console.error("Bad Request: ", error.response.data);
            } else if (error.response.status === 500 || error.code ==="ECONNABORTED") {
                console.error("Server Error: ", error.response.data);
            }
        } else {
            console.error("Network Error: ", error.message);
        }

        return Promise.reject(error); 
    }
);

export default axiosInstance;