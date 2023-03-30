import getCurrentUser from './getCurrentUser';
import getToken from './getToken';
import axios from 'axios';
import img from '../images/sprite.svg';
const addMarkup = items => {
  console.log(items);
  const basket = document.querySelector('.cart');
  const main = document.querySelector('.section-cart__body');
  if (items.length === 0) {
    main.innerHTML = `<p class="basket__empty">Your list is empty</p>`;
    return;
  }

  const markup = items
    .map(
      ({ name, price, image, itemId }) =>
        ` <section class="product">
          <div class="product__img"><img class="product__img" src="http://localhost:3000/${image}" alt="${name}"></div>
          <div class="product__title">${name}</div>
          <div class="product__count">
              <div class="count">
                 
                      <p>1</p>

                 
              </div>
          </div>
          <div class="product__price">${price}</div>
          <div class="product__controls">
              <button type="button" class="basket__remove">
                  <svg width="30px" height="21px" class="icon-bin" >
                     
                      <use class="icon-menu" ref="tester" data-deleteId="${itemId}" href="${img}#icon-bin"></use>
                    </svg>
              </button>
              <button data-buyId="${itemId}"> Buy    </button>
          </div>
          
      </section>`
    )
    .join('');
  basket.insertAdjacentHTML('beforeend', markup);
  const itemsFronBasket = document.querySelectorAll('.product');
  Array.from(itemsFronBasket).forEach(link => {
    link.addEventListener('click', function (event) {
      console.log(event.target.dataset.buyid);

      event.preventDefault();
      if (event.target.dataset.deleteid) {
        axios
          .post(
            `http://localhost:3000/api/user/items/removeFromFavorite/${event.target.dataset.deleteid}`
          )
          .then(res => {
            console.log(res);
            location.reload();
          });
          return
      }
      if (event.target.dataset.buyid) {
        console.log("AA")
        localStorage.setItem("buyId", event.target.dataset.buyid);
        window.location.href="/buy.html";
      }
    });
  });
};

getCurrentUser();
getToken();
axios
  .get('http://localhost:3000/api/user/items/getFav')
  .then(res => {
    //   console.log(res.data.items);
    addMarkup(res.data.items);
    console.log('D');
  })
  .then(() => {})
  .catch(er => console.log(er));
