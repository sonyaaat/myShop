import axios from 'axios';
import getCurrentUser from './getCurrentUser';
import getToken from './getToken';
let res
getCurrentUser();
getToken();
axios
  .get('http://localhost:3000/api/admin/items')
  .then(res => {
    func(res.data.data);
  })
  .then(()=>{
    const itemsList=document.querySelectorAll(".portfolio__item")
  console.log(itemsList);
  Array.from(itemsList).forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault()
        console.log(event.currentTarget.id)
        window.location.href = '/item.html';
        localStorage.setItem("item",event.currentTarget.id );
    });
});
  })
  .catch(er => console.log(er));
const list = document.querySelector('.portfolio__list');


const func = items => {
  console.log(items)
  const markup = items
    .map(item => {
      return ` <li class="portfolio__item" id="${item._id}">
<a href="" class="link portfolio__link">
  <div class="portfolio__thumb">
    <img
    class="portfolio__img"
    src="http://localhost:3000/${item.image}"
    
  />
  </div>
  <div class="portfolio__content">
    <h2 class="portfolio__header">${item.name}</h2>
    <p class="portfolio__text">${item.description}</p>
    <p class="portfolio__price">Price: ${item.price}₴</p>
  </div>
</a>
</li>`;
    })
    .join('');
  
  list.innerHTML = markup;
   res= markup
};
const infoClick=()=>{
 
}
infoClick()
export default res
