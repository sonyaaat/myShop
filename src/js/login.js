import axios from "axios";
import getToken from "./getToken";
console.log("LOG")
const form=document.querySelector(".login-container")
form.addEventListener("submit", handleSubmit);
const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  };
async function  handleSubmit  (event){
    event.preventDefault();
    const {
      elements: { login, password }
    } = event.currentTarget;
  
    if (login.value === "" || password.value === "") {
      return console.log("Please fill in all the fields!");
    }
  
    console.log(`Login: ${login.value}, Password: ${password.value}`);
    //event.currentTarget.reset();
    axios.post('http://localhost:3000/api/auth/login',{
        email:login.value,password:password.value
    })
    .then(function (response) {
     setAuthHeader(response.data.token);
     localStorage.setItem("token",response.data.token)
     localStorage.setItem("loggedIn",true)
      
      window.location.href="/index.html";
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }
  const redirect=()=>{
    window.location.href="/register.html";
  }

  const register=document.querySelector(".register")
  register.addEventListener("click",redirect)

