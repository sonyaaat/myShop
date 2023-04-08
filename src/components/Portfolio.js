import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllItems } from 'redux/main/main-operations';
import { selectIsLoading, selectItems } from 'redux/main/main-selectors';
import Spinner from './Spinner';
const Portfolio = () => {
  const [filter, setFilter] = useState('');
  const [search,setSerch]=useState("")

  const changeFilter = evt => {
    evt.preventDefault();
    const value = evt.target.value;
    setFilter(value);
  };
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  //const [items, setItems] = useState([]);
  const items = useSelector(selectItems);
  const [filteredItems, setFilteredItems] = useState(items);
  const  [searchedItems, setSearchedItems] = useState(items);
  console.log('items', items);
  useEffect(() => {
    if (filter === 'toHigh') {
      const res = [...items].sort(
        (first, second) => parseInt(first.price) - parseInt(second.price)
      );
      setFilteredItems(res);
    }
    if (filter === 'toLow') {
      const res = [...items].sort(
        (first, second) => parseInt(second.price) - parseInt(first.price)
      );
      setFilteredItems(res);
    }
    if (filter === 'toAlph') {
      const res = [...items].sort((first, second) =>
        first.name.localeCompare(second.name)
      );
      setFilteredItems(res);
    }
  }, [filter, items]);
  useEffect(()=>{

  },[search])
  useEffect(() => {
    console.log('aa');
    dispatch(getAllItems());
  }, [dispatch]);

  return (
    <>
      <main>
        <section className="portfolio section">
          <div className="container portfolio__container">
            <h1 hidden>Portfolio</h1>

            <div class="search-local">
              <div class="icon">
                <ion-icon name="location-outline"></ion-icon>
              </div>

              <input type="text" placeholder="" />
              <button>
                <a href="#">Find</a>
                <ion-icon name="search-outline" class="search-icon"></ion-icon>
              </button>
            </div>

            <script
              type="module"
              src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
            ></script>
            <script
              nomodule
              src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
            ></script>

            <label htmlFor="size" className="order-search-label">
              Filter
            </label>
            <select
              id="size"
              name="filter"
              className="order-search-select portfolio__select"
              onChange={changeFilter}
            >
              <option></option>
              <option value="toHigh">Price: Low to High</option>
              <option value="toLow">Price: High to Low</option>
              <option value="toAlph">In alphabetical order</option>
            </select>

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
            {isLoading ? (
              <Spinner />
            ) : (
              <ul class="list portfolio__list">
                {filteredItems &&
                  filteredItems.map(item => (
                    <li class="portfolio__item">
                      <Link
                        to={`/item/${item._id}`}
                        class="link portfolio__link"
                      >
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
            )}
          </div>
        </section>
      </main>
    </>
  );
};
export default Portfolio;
