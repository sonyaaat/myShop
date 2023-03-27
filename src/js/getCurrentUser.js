import axios from 'axios';
import getToken from './getToken';
const getCurrentUser=()=>{
    getToken()
    
    return axios
    .get('http://localhost:3000/api/users/currentUser')
    .then(function (response) {
        return response.data
    })
    .catch(er=>{
        console.log(er)
        return "no"
    })
}
export default getCurrentUser