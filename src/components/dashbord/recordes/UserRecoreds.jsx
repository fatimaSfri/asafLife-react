
import axiosInstance from "../../axiosConfig";

const UserRecoreds = () => {
   axiosInstance.get('/user')
   .then(response => {console.log(response.data)})
   .catch(error => {console.log(error)});
}

export default UserRecoreds;
