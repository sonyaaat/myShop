import axios from 'axios';
import swal from 'sweetalert';
const addForm = document.querySelector('.add__form');
const inputImg = document.querySelector('.input-img');
let img
let downloaded
console.log(inputImg);
let formData = new FormData();

const onSubmit = evt => {
  evt.preventDefault();
  const {
    elements: { name, quantity, price, description },
  } = evt.target;
  console.log(name, quantity, price, description);
  formData.append("name",name.value)
  formData.append("quantity",quantity.value)
  formData.append("price",price.value)
  formData.append("description",description.value)
  if(!name || !quantity || !price || !description || !downloaded){
    swal("Oops!", "Fill all the fields");
    return
  }
  console.log("formdata",...formData)
  console.log(name.value, quantity.value, price.value, description.value)
  axios
    .post('http://localhost:3000/api/admin/items', formData)
    .then(res => {console.log(res)
        swal("Success!", "Item was added!", "success");})
        setTimeout(()=>{
            window.location.href = '/index.html';
        },1000)
    .catch(error=>
       {
        formData=new FormData();
        console.log(error)
       });
};
const imgChange = event => {
  console.log('f');
  img=event.target.files[0]
  console.log(event.target.files[0]);

  formData.append('image', event.target.files[0]);
downloaded=true
  console.log(...formData);
};
addForm.addEventListener('submit', onSubmit);
inputImg.addEventListener('change', imgChange);
