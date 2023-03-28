import axios from 'axios';
import getCurrentUser from './getCurrentUser';
import getToken from './getToken';
getCurrentUser();
getToken();
const itemId = localStorage.getItem("item");
console.log(itemId)
axios
  .get(`http://localhost:3000/api/user/items/${itemId}`)
  .then(res => {
    const {name,description,price,quantity,image}=res.data
    console.log(res)
    render(name,description,price,quantity,image)
  })
  const render=(name,description,price,quantity,image)=>{
    const markup=` <h1 class="item__header">${name}</h1>
    <p>${description}</p>
  <div class="item__box">
      <div class="item__box1">
          <img class="item__img" src="http://localhost:3000/${image}"/>
      </div>
      <div class="item__box2">
          <p class="item__price">$ ${price}</p>
          <p class="item__subs">Choose a size</p>
          <form class="item__sizes">
              <label >
                <input type="radio" class ="item__input" name="size" value="S" checked />
                <div class="item__size">S</div>
              </label>
              <label>
                <input class ="item__input" type="radio"  name="size" value="M" />
                <div class="item__size">M</div>
              </label>
              <label >
                <input type="radio" class ="item__input" name="size" value="L" />
                <div class="item__size">L</div>
              </label>
             
            </form>
            <button class="item__button">Add to basket</button>
            </div>
            `
        
const container=document.querySelector(".item__container")
container.insertAdjacentHTML("beforeend",markup)
const backBtn=document.querySelector(".back__btn")
backBtn.addEventListener("click",()=>{
    window.location.href = '/portfolio.html';
    localStorage.setItem("item","");
})
  }