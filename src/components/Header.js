import { useDispatch, useSelector } from "react-redux";
import { NavLink,Link } from "react-router-dom";
import { logOut } from "redux/auth/auth-operations";
import {selectIsLoggedIn, selectUser,selectRole} from "../../src/redux/auth/auth-selectors"
import sprite from "../images/sprite.svg"
const Header = () => {
  const dispatch=useDispatch()
  const isLoggedIn=useSelector(selectIsLoggedIn)
  const user=useSelector(selectUser)
  const role=useSelector(selectRole)
  const handleSubmit=()=>{
      dispatch(logOut())
  }
  return (
    <>
      <header class="header">
        <div class="container header__container">
          <a href="/" lang="en" class="logo">
            Esste<span class="studio">Store</span>
          </a>
          <div class="header__wrap" id="header__wrap">
            <nav class="header__nav">
              <ul class="list header__list">
                <li class="list header__item">
                  <Link to="/" class="header__link  link">
                    About us
                  </Link>
                </li>
                <li class="list header__item">
                  <Link to="/portfolio" class="header__link link">
                    Main Page
                  </Link>
                </li>
                {!isLoggedIn && <li class="list header__item js-login none">
                  <Link to="/login" class="header__link link">
                    Login
                  </Link>
                </li>}
                {role==="admin" && <li class="list header__item js-admin none">
                  <Link to="adminpage" class="header__link  link">
                    Admin
                  </Link>
                </li>}
                {role==="user" && <li class="list header__item js-user none">
                  <Link to="userinfo" class="header__link  link">
                    User Info
                  </Link>
                </li>}
                {role==="admin" && <li class="list header__item js-add none">
                  <Link to="/add" class="header__link  link">
                    Add Item
                  </Link>
                </li>}
              </ul>
            </nav>
            <div class="list__wrap">
              <ul class="list contacts">
                <li class="contacts__item">
                  <a
                    href="tel:+380961111111"
                    lang="en"
                    class="contacts__link link contacts__link--tel"
                  >
                    <svg class="contacts__svg contacts__svg--tel">
                      <use href={`${sprite}#tel`}></use>
                    </svg>

                    <span>+38 096 111 11 11</span>
                  </a>
                </li>
              </ul>
            </div>
            {role && <Link to="/basket ">
              <svg width="30px" height="21px" class="header__basket">
                <use href={`${sprite}#basket`}></use>
              </svg>
            </Link>}
            {isLoggedIn && <svg width="30px" height="21px" class="header__basket logout none" onClick={handleSubmit}>
              <use href={`${sprite}#icon-logout`}></use>
            </svg>}
          </div>

          <button
            type="button"
            class="menu-button menu-button--open js-open-menu"
            aria-label="Переключатель мобильного меню"
            aria-expanded="false"
            aria-controls="mobile-menu"
          >
            <svg width="30px" height="21px" class="icon-menu">
              <use class="icon-menu" href={`${sprite}#menu`}></use>
            </svg>
          </button>
        </div>
      </header>

      <div class="menu-container js-menu-container" id="mobile-menu">
        <button
          type="button"
          class="menu-button menu-button--close js-close-menu"
          aria-label="Переключатель мобильного меню"
          aria-expanded="false"
        >
          <svg width="40px" height="40px">
            <use class="icon-cross" href={`${sprite}#cross`}></use>
          </svg>
        </button>

        <div class="mobile-menu">
          <nav class="header__nav">
            <ul class="list header__list">
              <li class="list header__item">
                <a href="" class="header__link header__link--active link">
                  About us
                </a>
              </li>
              <li class="list header__item">
                <a href="../src/portfolio.html" class="header__link link">
                  Main Page
                </a>
              </li>
              <li class="list header__item js-login none">
                <a href="../src/login.html" class="header__link link">
                  Login
                </a>
              </li>
              <li class="list header__item js-admin none">
                <a href="../src/adminpage.html" class="header__link  link">
                  Admin
                </a>
              </li>
              <li class="list header__item js-user none">
                <a href="../src/userinfo.html" class="header__link  link">
                  User Info
                </a>
              </li>
              <li class="list header__item js-add none">
                <a href="../src/add.html" class="header__link  link">
                  Add Item
                </a>
              </li>
            </ul>
          </nav>
          <div class="list__wrap">
            <ul class="list contacts-menu">
              <li class="contacts__item">
                <a
                  href="mailto:info@devstudio.com"
                  lang="en"
                  class="contacts__link link contacts__link--mail"
                >
                  <svg class="contacts__svg contacts__svg--mail">
                    <use href={`${sprite}#mail`}></use>
                  </svg>

                  <span> info@devstudio.com </span>
                </a>
              </li>
              <li class="contacts-menu__item">
                <a
                  href="tel:+380961111111"
                  lang="en"
                  class="contacts__link link contacts__link--tel"
                >
                  <svg class="contacts__svg contacts__svg--tel">
                    <use href={`${sprite}#tel`}></use>
                  </svg>

                  <span>+38 096 111 11 11</span>
                </a>
              </li>
            </ul>
            <ul class="soc list">
              <li class="soc-item link">
                <a href="" class="soc-link">
                  Instagram
                </a>
              </li>
              <li class="soc-item link">
                <a href="" class="soc-link">
                  Twitter
                </a>
              </li>
              <li class="soc-item link">
                <a href="" class="soc-link">
                  Facebook
                </a>
              </li>
              <li class="soc-item link">
                <a href="" class="soc-link">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
