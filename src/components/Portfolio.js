import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllItems } from 'redux/main/main-operations';
import { selectItems } from 'redux/main/main-selectors';
const Portfolio = () => {
  const dispatch = useDispatch();
  //const [items, setItems] = useState([]);
  const items = useSelector(selectItems);
  console.log(items);
  useEffect(() => {
    console.log('aa');
    dispatch(getAllItems());
  }, [dispatch]);

  return (
    <>
      <main>
        <section className="portfolio section">
          <div className="container">
            <h1 hidden>Portfolio</h1>

            {/* <ul className="list portfolio__list">
              <li>
                <button
                  type="button"
                  className="buttons__item buttons__item--accent"
                >
                  All
                </button>
              </li>
              <li>
                <button type="button" className="buttons__item">
                  Women
                </button>
              </li>
              <li>
                <button type="button" className="buttons__item">
                  Men
                </button>
              </li>
            </ul> */}
            <ul class="list portfolio__list">
              {items &&
                items.map(item => (
                  <li class="portfolio__item">
                    <Link to={`/item/${item._id}`} class="link portfolio__link">
                      <div class="portfolio__thumb">
                        <img
                        alt={item.name}
                          class="portfolio__img"
                          src={`http://localhost:3000/${item.image}`}
                        />
                      </div>
                      <div class="portfolio__content">
                        <h2 class="portfolio__header">{item.name}</h2>
                        <p class="portfolio__text">{item.description}</p>
                        <p class="portfolio__price">Price: {item.price}₴</p>
                      </div>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
};
export default Portfolio;
