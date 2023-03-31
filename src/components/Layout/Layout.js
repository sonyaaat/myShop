import css from '../Layout/Layout.module.css';
import { clsx } from 'clsx';
import sprite from '../../images/sprite.svg';
const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <div className={clsx(css.container, css.header__container)}>
          <a href="./" lang="en" className={css.logo}>
            Esste<span className={css.studio}>Store</span>
          </a>
          <div className={css.header__wrap} id="header__wrap">
            <nav className={css.header__nav}>
              <ul className={clsx(css.list, css.header__list)}>
                <li className={clsx(css.list, css.header__item)}>
                  <a href="./" className={clsx(css.header__link, css.link)}>
                    About us
                  </a>
                </li>
                <li className={clsx(css.list, css.header__item)}>
                  <a
                    href="../src/portfolio.html"
                    className={clsx(css.header__link, css.link)}
                  >
                    Main Page
                  </a>
                </li>
                <li className={clsx(css.list, css.header__item)}>
                  <a
                    href="../src/login.html"
                    className={clsx(css.header__link, css.link)}
                  >
                    Login
                  </a>
                </li>
                <li className={clsx(css.list, css.header__item)}>
                  <a
                    href="../src/adminpage.html"
                    className={clsx(css.header__link, css.link)}
                  >
                    Admin
                  </a>
                </li>
                <li className={clsx(css.list, css.header__item, css.none)}>
                  <a
                    href="../src/userinfo.html"
                    className={clsx(css.header__link, css.link)}
                  >
                    User Info
                  </a>
                </li>
                <li className={clsx(css.list, css.header__item, css.none)}>
                  <a
                    href="../src/add.html"
                    className={clsx(css.header__link, css.link)}
                  >
                    Add Item
                  </a>
                </li>
              </ul>
            </nav>
            <div className={css.list__wrap}>
              <ul className={clsx(css.list, css.contacts)}>
                <li className={css.contacts__item}>
                  <a
                    href="tel:+380961111111"
                    lang="en"
                    className={clsx(
                      css.contacts__link,
                      css.link,
                      css.contacts__linktel
                    )}
                  >
                    <svg
                      className={clsx(css.contacts__svg, css.contacts__svgtel)}
                    >
                      <use href={`${sprite}#tel`}></use>
                    </svg>

                    <span>+38 096 111 11 11</span>
                  </a>
                </li>
              </ul>
            </div>
            <a href="./basket.html">
              <svg width="30px" height="21px" className={css.header__basket}>
                <use href={`${sprite}#basket`}></use>
              </svg>
            </a>
            <svg
              width="30px"
              height="21px"
              className={clsx(css.header__basket, css.logout, css.none)}
            >
              <use href={`${sprite}#icon-logout`}></use>
            </svg>
          </div>

          <button
            type="button"
            className={clsx(css.menubutton, css.menubuttonopen, css.jsopenmenu)}
            aria-label="Переключатель мобильного меню"
            aria-expanded="false"
            aria-controls="mobile-menu"
          >
            <svg width="30px" height="21px" className={css.icon_menu}>
              <use className={css.icon_menu} href={`${sprite}#menu`}></use>
            </svg>
          </button>
        </div>
      </header>
     
    </>
  );
};
export default Layout;
