import axios from 'axios';
const table = document.querySelector('.table__body');
const table2 = document.querySelector('.table2');
const table3 = document.querySelector('.table-orders');
import getToken from './getToken';
const fetch = async () => {
  getToken()
  axios
    .get('http://localhost:3000/api/users')
    .then(function (response) {
      // handle success

      const userMarkup = response.data.users.map(mail => {
        return ` <tr>
     
      <td>${mail}</td>
      <td>1</td>
      <td>1</td>
  </tr>`;
      }).join("");
      const adminMarkup = response.data.admins.map(mail => {
        return  `<tr>
       
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
    axios
    .get('http://localhost:3000/api/order')
    .then((res)=>{
      console.log(res.data.data)
      const ordersMarkup = res.data.data.map(el => {
        return  `<tr>
        <td>${el.itemId}</td>
        <td>${el.owner}</td>
        <td>${el.quantity}</td>
        <td>${el.status}</td>
    </tr>`
      }).join("");
    
      table3.insertAdjacentHTML("beforeend",ordersMarkup)
    })
};
fetch();
