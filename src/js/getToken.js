import axios from 'axios';
const getToken=()=>{
    const authToken = localStorage.getItem('token');
    
    if (authToken) {
      axios.defaults.headers.common.Authorization = `Bearer ${authToken}`;
    }
}
export default getToken