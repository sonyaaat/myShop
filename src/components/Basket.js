import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteFromBasket, getFav } from 'redux/main/main-operations';
import { selectFav } from 'redux/main/main-selectors';
import sprite from '../images/sprite.svg';

const Basket = () => {
  const favorites = useSelector(selectFav);
  console.log('fav', favorites);
  //favorites.map((el)=>console.log(el))
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFav());
  }, [dispatch]);
  const onDeleteBasket=(itemId)=>{
    dispatch(deleteFromBasket({id:itemId}))
  }
  const onBuy=()=>{

  }
  return (
    <>
      <main>
        <section className="section-cart">
          <header className="section-cart__header">
            <div className="container">
              <h1 className="title-1">Basket</h1>
            </div>
          </header>
          <div className="section-cart__body">
            <div className="container">
              <section className="cart">
                <header className="cart-header">
                  <div className="cart-header__title">Name</div>
                  <div className="cart-header__count">Quantity</div>
                  <div className="cart-header__cost">Price</div>
                </header>
                {favorites.length > 0 &&
                  favorites.map(({ name, price, image, itemId }) => (
                    <section className="product">
                      <div className="product__img">
                        <img
                          className="product__img"
                          alt={name}
                          src={`http://localhost:3000/${image}`}
                        />
                      </div>
                      <div className="product__title">{name}</div>
                      <div className="product__count">
                        <div className="count">
                          <p>1</p>
                        </div>
                      </div>
                      <div className="product__price">{price}</div>
                      <div className="product__controls">
                        <button type="button" className="basket__remove" onClick={()=>onDeleteBasket(itemId)}>
                          <svg width="30px" height="21px" className="icon-bin">
                            <use
                              className="icon-menu"
                              href={`${sprite}#icon-bin`}
                            ></use>
                          </svg>
                        </button>
                       <Link to={`/buy/${itemId}`}>
                       <button onClick={onBuy} className="basket__btn" > Buy </button></Link>
                      </div>
                    </section>
                  ))}
                  {favorites.length===0 && <p className="basket__empty">Your list is empty</p>}

              </section>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default Basket;
