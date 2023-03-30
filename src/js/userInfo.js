const namePart = document.querySelector('.js-name');
const mainName = document.querySelector('.js-name2');
const usernamePart = document.querySelector('.js-username');
const emailPart = document.querySelector('.js-email');
const firstnamePart = document.querySelector('.js-firstname');
const lastnamePart = document.querySelector('.js-lastname');
const contactsPart = document.querySelector('.js-contact');
const form = document.querySelector('.js-form');
const imageUpload = document.querySelector('.input-img');
const imageEl = document.querySelector('.card-profile-image');

import swal from 'sweetalert';

import axios from 'axios';

const editMarkup = (
  firstName,
  lastName,
  username,
  address,
  country,
  city,
  postalCode,
  email,
  avatar
) => {
  if(!firstName){
    console.log(avatar);
    const nameMarkup = ` <h1 class="display-2 text-white">Hello </h1>`;
    const nameMarkup2 = ` <h3 class="name">
      <span class="font-weight-light"></span>
    </h3>`;
    const usernameMarkup = `
  <label class="form-control-label" for="input-username">Username</label>
  <input required type="text" id="input-username" class="form-control form-control-alternative" placeholder="Username" name="username" value="">
  `;
    const emailMarkup = ` <p class="form-control form-control-alternative"> ${email}<p/>`;
  
    const firstNameMarkup = ` <input required type="text" id="input-first-name" class="form-control form-control-alternative"  name="firstname" placeholder="First name" value="">`;
    const lastNameMarkup = ` <input required type="text" id="input-last-name" class="form-control form-control-alternative" name="lastname" placeholder="Last name" value="">`;
    const contactMarkup = `<div class="row">
      <div class="col-md-12">
        <div class="form-group focused">
          <label  class="form-control-label" for="input-address">Address</label>
          <input required id="input-address" class="form-control form-control-alternative" name="address" placeholder="Home Address" value="" type="text">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4">
        <div class="form-group focused">
          <label  class="form-control-label" for="input-city">City</label>
          <input required type="text" name="city" id="input-city" class="form-control form-control-alternative" placeholder="City" value="">
        </div>
      </div>
      <div class="col-lg-4">
        <div class="form-group focused">
          <label  class="form-control-label" for="input-country">Country</label>
          <input required type="text" name="country" id="input-country" class="form-control form-control-alternative" placeholder="Country" value="">
        </div>
      </div>
      <div class="col-lg-4">
        <div class="form-group">
          <label required class="form-control-label" for="input-country">Postal code</label>
          <input required type="number" name="postalCode" id="input-postal-code" class="form-control form-control-alternative" placeholder="Postal code" value="">
        </div>
      </div>
    </div>`;
    const imgMarkup = `   <img src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg" class="rounded-circle"> height="170" class="rounded-circle">`;
    namePart.insertAdjacentHTML('afterbegin', nameMarkup);
    mainName.insertAdjacentHTML('afterbegin', nameMarkup2);
    usernamePart.insertAdjacentHTML('beforeend', usernameMarkup);
    emailPart.insertAdjacentHTML('beforeend', emailMarkup);
    firstnamePart.insertAdjacentHTML('beforeend', firstNameMarkup);
    lastnamePart.insertAdjacentHTML('beforeend', lastNameMarkup);
    contactsPart.insertAdjacentHTML('beforeend', contactMarkup);
    imageEl.innerHTML = imgMarkup;
  }
  else{
  console.log(avatar);
  const nameMarkup = ` <h1 class="display-2 text-white">Hello ${firstName}</h1>`;
  const nameMarkup2 = ` <h3 class="name">
    ${firstName} ${lastName} <span class="font-weight-light"></span>
  </h3>`;
  const usernameMarkup = `
<label class="form-control-label" for="input-username">Username</label>
<input required type="text" id="input-username" class="form-control form-control-alternative" placeholder="Username" name="username" value="${username}">
`;
  const emailMarkup = ` <p  type="email" id="input-email" name="email" class="form-control form-control-alternative" >${email}<p/>`;

  const firstNameMarkup = ` <input required type="text" id="input-first-name" class="form-control form-control-alternative"  name="firstname" placeholder="First name" value="${firstName}">`;
  const lastNameMarkup = ` <input required type="text" id="input-last-name" class="form-control form-control-alternative" name="lastname" placeholder="Last name" value="${lastName}">`;
  const contactMarkup = `<div class="row">
    <div class="col-md-12">
      <div class="form-group focused">
        <label  class="form-control-label" for="input-address">Address</label>
        <input required id="input-address" class="form-control form-control-alternative" name="address" placeholder="Home Address" value="${address}" type="text">
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-lg-4">
      <div class="form-group focused">
        <label  class="form-control-label" for="input-city">City</label>
        <input required type="text" name="city" id="input-city" class="form-control form-control-alternative" placeholder="City" value="${city}">
      </div>
    </div>
    <div class="col-lg-4">
      <div class="form-group focused">
        <label  class="form-control-label" for="input-country">Country</label>
        <input required type="text" name="country" id="input-country" class="form-control form-control-alternative" placeholder="Country" value="${country}">
      </div>
    </div>
    <div class="col-lg-4">
      <div class="form-group">
        <label required class="form-control-label" for="input-country">Postal code</label>
        <input required type="number" name="postalCode" id="input-postal-code" class="form-control form-control-alternative" placeholder="Postal code" value="${postalCode}">
      </div>
    </div>
  </div>`;
  const imgMarkup = ` <img src="http://localhost:3000/${avatar}" height="170" class="rounded-circle">`;
  namePart.insertAdjacentHTML('afterbegin', nameMarkup);
  mainName.insertAdjacentHTML('afterbegin', nameMarkup2);
  usernamePart.insertAdjacentHTML('beforeend', usernameMarkup);
  emailPart.insertAdjacentHTML('beforeend', emailMarkup);
  firstnamePart.insertAdjacentHTML('beforeend', firstNameMarkup);
  lastnamePart.insertAdjacentHTML('beforeend', lastNameMarkup);
  contactsPart.insertAdjacentHTML('beforeend', contactMarkup);
  imageEl.innerHTML = imgMarkup;
  }
 
};
const imgChange = event => {
  console.log(event.target.files[0]);
  let formData = new FormData();
//   const formData={
//     "avatar":event.target.files[0]
//   }
  formData.append('avatar', event.target.files[0]);
  //ar options = { content: formData };
  
  console.log(...formData);
  axios
    .post('http://localhost:3000/api/users/avatar', 
      formData,
     // headers: { 'Content-Type': 'multipart/form-data' },
    )
    .then(() => {

      console.log('downloaded');
    });
};
const handleSubmit = event => {
  event.preventDefault();
  console.log('Change');
  const {
    elements: {
      firstname,
      lastname,
      postalCode,
      country,
      city,
      address,
      username,
    },
  } = event.currentTarget;
  console.log(
    firstname.value,
    lastname.value,
    postalCode.value,
    country.value,
    city.value
  );
  axios
    .post('http://localhost:3000/api/users/edit', {
      firstName: firstname.value,
      lastName: lastname.value,
      address: address.value,
      city: city.value,
      country: country.value,
      postalCode: postalCode.value,
      username: username.value,
    })
    .then(() => {
      swal("Success!", "Your info was changed!", "success");
      setTimeout(()=>{
        window.location.href = '/portfolio.html';
      },500)
      
    });
};
axios
  .get('http://localhost:3000/api/users/userInfo')
  .then(res => {
    console.log(res.data.result);
    const {
      firstName,
      lastName,
      username,
      address,
      country,
      city,
      postalCode,
      email,
      avatar,
    } = res.data.result;
    editMarkup(
      firstName,
      lastName,
      username,
      address,
      country,
      city,
      postalCode,
      email,
      avatar
    );
  })
  .catch(er => console.log(er));
form.addEventListener('submit', handleSubmit);
imageUpload.addEventListener('change', imgChange);
