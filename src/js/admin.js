import axios from 'axios';
const table = document.querySelector('.table__body');
const table2 = document.querySelector('.table2');
import getToken from './getToken';
const fetch = async () => {
  getToken()
  axios
    .get('http://localhost:3000/api/users')
    .then(function (response) {
      // handle success

      const userMarkup = response.data.users.map(mail => {
        return ` <tr>
      <td>Dom</td>
      <td>${mail}</td>
      <td>1</td>
      <td>1</td>
  </tr>`;
      }).join("");
      const adminMarkup = response.data.admins.map(mail => {
        return  `<tr>
        <td>Mike</td>
        <td>${mail}</td>
        <td>Manager</td>
    </tr>`
      }).join("");
    
      table.innerHTML = userMarkup;
      table2.innerHTML = adminMarkup;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
};
fetch();
