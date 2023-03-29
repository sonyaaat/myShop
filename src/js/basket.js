import getCurrentUser from './getCurrentUser';
import getToken from './getToken';
import axios from 'axios';
console.log('aaa');
const addMarkup = ( items ) => {
    console.log('a');
    const basket = document.querySelector('.cart');
    const markup = items.map(item => 
     ` <section class="product">
          <div class="product__img"><img src="./images/astronaut 1.svg" alt="Apple MacBook Air 13"></div>
          <div class="product__title">Apple MacBook Air 13</div>
          <div class="product__count">
              <div class="count">
                  <div class="count__box">
                      <input type="number" class="count__input" min="1" max="100" value="1">
                  </div>
                 
              </div>
          </div>
          <div class="product__price">110 000 руб.</div>
          <div class="product__controls">
              <button type="button" class="basket__remove">
                  <svg width="30px" height="21px" class="icon-bin" >
                     
                      <use class="icon-menu" href="./images/sprite.svg#icon-bin"></use>
                    </svg>
              </button>
          </div>
      </section>`
    );
    basket.insertAdjacentHTML('beforeend', markup);
  };
  
getCurrentUser();
getToken();
axios.get('http://localhost:3000/api/user/items/getFav').then(res => {
//   console.log(res.data.items);
  addMarkup(res.data.items);
  console.log("D")

}).catch(er=>console.log(er));
