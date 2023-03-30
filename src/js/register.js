import axios from "axios";
import swal from 'sweetalert';
const redirect = () => {
  window.location.href = '/login.html';
};
const login = document.querySelector('.loginBtn');

login.addEventListener('click', redirect);

const form = document.querySelector('.login-container');
form.addEventListener('submit', handleSubmit);
async function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { login, password },
  } = event.currentTarget;

  if (login.value === '' || password.value === '') {
    return swal("Oops!","Please fill in all the fields!");
  }

  console.log(`Login: ${login.value}, Password: ${password.value}`);
  //event.currentTarget.reset();
  axios
    .post('http://localhost:3000/api/auth/register', {
      email: login.value,
      password: password.value,
    })
    .then(function (response) {
      window.location.href = '/login.html';
    })
    .catch(function (error) {
      // handle error
      swal("Oops!", error.response.data.message);
    });
}
