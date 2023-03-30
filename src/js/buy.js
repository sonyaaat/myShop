import getCurrentUser from './getCurrentUser';
import getToken from './getToken';
import axios from 'axios';
import swal from 'sweetalert';

const usernamePart = document.querySelector('.js-username');
const emailPart = document.querySelector('.js-email');
const firstnamePart = document.querySelector('.js-firstname');
const lastnamePart = document.querySelector('.js-lastname');
const contactsPart = document.querySelector('.js-contact');
const buyItem = document.querySelector('.buy-item');
const btnSubmit = document.querySelector('.buy__btn--submit');
const btnCancel = document.querySelector('.buy__btn--cancel');

getCurrentUser();
getToken();
axios.get(`http://localhost:3000/api/users/userInfo`).then(res => {
  createUserData(res.data.result);
});

const itemId = localStorage.getItem('buyId');
console.log(itemId)
axios.get(`http://localhost:3000/api/user/items/${itemId}`).then(res => {
  const { name, description, price, quantity, image } = res.data;
  console.log(res);
  createInfoData(name, description, price, quantity, image);
});

const createUserData = ({
  address,
  city,
  country,
  postalCode,
  firstName,
  lastName,
  username,
  email,
}) => {
  const usernameMarkup = `
  <label class="form-control-label" for="input-username">Username</label>
  <input required type="text" id="input-username" class="form-control form-control-alternative" placeholder="Username" name="username" value="${username}">
  `;
  const emailMarkup = ` <p  type="email" id="input-email" name="email" class="form-control form-control-alternative" >${email}<p/>`;

  const firstNameMarkup = ` <p class="form-control form-control-alternative">${firstName}</p>`;
  const lastNameMarkup = ` <p class="form-control form-control-alternative">${lastName}</p>`;
  const contactMarkup = `<div class="row">
      <div class="col-md-12">
        <div class="form-group focused">
          <label  class="form-control-label" for="input-address">Address</label>
           <p class="form-control form-control-alternative">${address}</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4">
        <div class="form-group focused">
          <label  class="form-control-label" for="input-city">City</label>
           <p class="form-control form-control-alternative">${city}</p>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="form-group focused">
          <label  class="form-control-label" for="input-country">Country</label>
          <p class="form-control form-control-alternative">${country}</p>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="form-group">
          <label required class="form-control-label" for="input-country">Postal code</label>
          <p class="form-control form-control-alternative">${postalCode}</p>
        </div>
      </div>
    </div>`;

  usernamePart.insertAdjacentHTML('beforeend', usernameMarkup);
  emailPart.insertAdjacentHTML('beforeend', emailMarkup);
  firstnamePart.insertAdjacentHTML('beforeend', firstNameMarkup);
  lastnamePart.insertAdjacentHTML('beforeend', lastNameMarkup);
  contactsPart.insertAdjacentHTML('beforeend', contactMarkup);
};
const createInfoData = (name, description, price, quantity, image) => {
  const markup = ` <div class="buy__left">
       <h1 class="buy__text">${name}</h1>
        <p class="buy__text">${description}</p>
        <p class="buy__text">$ ${price}</p></div>
         <img  width="170" height="170" src="http://localhost:3000/${image}"/>
    </div>`;
  buyItem.insertAdjacentHTML('afterbegin', markup);
};

btnSubmit.addEventListener('click', e => {
  e.preventDefault();
  
  axios
    .post(`http://localhost:3000/api/order`, { itemId, quantity: 1 })
    .then(res => {
      console.log(res);
      
     
      swal("Added!", "Your purchase was made!", "success");
      setTimeout(()=>{
         window.location.href = '/index.html';
      },500)
    });
});
btnCancel.addEventListener('click', e => {
  e.preventDefault();
  console.log('G');
  window.location.href = '/index.html';
  localStorage.setItem('buyId', null);
});
