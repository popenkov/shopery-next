import React from 'react';

export const HeaderNavigation = () => {
  return (
    <nav className="header__navigation">
      <div className="container">
        <div className="header__content">
          <div className="header__navigation-content">
            <div className="header__all-categories">
              <button className="header__all-categories-button js-header-all-categories-button">
                <span className="burger-button header__all-categories-burger"></span>
                <span>All Categories</span>
                <svg className="header__all-categories-chevron">
                  <use href="img/svgSprite.svg#icon__chevron-down"></use>
                </svg>
              </button>
              <ul className="header__all-categories-dropdown js-header-all-categories-content">
                <li>
                  <a className="header__all-categories-link" href="#">
                    <svg className="header__all-categories-icon">
                      <use href="img/svgSprite.svg#icon__apple"></use>
                    </svg>
                    <span>Fresh Fruit</span>
                  </a>
                </li>
                <li>
                  <a className="header__all-categories-link" href="#">
                    <svg className="header__all-categories-icon">
                      <use href="img/svgSprite.svg#icon__salad"></use>
                    </svg>
                    <span>Vegetables</span>
                  </a>
                </li>
                <li>
                  <a className="header__all-categories-link" href="#">
                    <svg className="header__all-categories-icon">
                      <use href="img/svgSprite.svg#icon__fish"></use>
                    </svg>
                    <span>River Fish</span>
                  </a>
                </li>
                <li>
                  <a className="header__all-categories-link" href="#">
                    <svg className="header__all-categories-icon">
                      <use href="img/svgSprite.svg#icon__coffee"></use>
                    </svg>
                    <span>Drink &amp; Water</span>
                  </a>
                </li>
                <li>
                  <a className="header__all-categories-link" href="#">
                    <svg className="header__all-categories-icon">
                      <use href="img/svgSprite.svg#icon__ice-cream"></use>
                    </svg>
                    <span>Yogurt &amp; Ice Cream</span>
                  </a>
                </li>
                <li>
                  <a className="header__all-categories-link">
                    <svg className="header__all-categories-icon">
                      <use href="img/svgSprite.svg#icon__cupcake"></use>
                    </svg>
                    <span>Cake &amp; Bread</span>
                  </a>
                </li>
                <li>
                  <a className="header__all-categories-link" href="#">
                    <svg className="header__all-categories-icon">
                      <use href="img/svgSprite.svg#icon__pie"></use>
                    </svg>
                    <span>Butter &amp; Cream</span>
                  </a>
                </li>
                <li>
                  <a className="header__all-categories-link" href="#">
                    <svg className="header__all-categories-icon">
                      <use href="img/svgSprite.svg#icon__food"></use>
                    </svg>
                    <span>Cooking</span>
                  </a>
                </li>
              </ul>
            </div>
            <ul className="header__navigation-menu">
              <li className="header__navigation-menu-item">
                <a
                  className="header__navigation-menu-link header__navigation-menu-link--active"
                  href="#"
                >
                  Home
                  <svg className="header__navigation-link-icon">
                    <use href="img/svgSprite.svg#icon__chevron-down"></use>
                  </svg>
                </a>
                <ul className="header__navigation-drop-menu">
                  <li>
                    <a className="header__navigation-drop-menu-link" href="#">
                      Home 1
                    </a>
                  </li>
                  <li>
                    <a className="header__navigation-drop-menu-link" href="#">
                      Home 1
                    </a>
                  </li>
                  <li>
                    <a className="header__navigation-drop-menu-link" href="#">
                      Home 1
                    </a>
                  </li>
                  <li>
                    <a className="header__navigation-drop-menu-link" href="#">
                      Home 1
                    </a>
                  </li>
                </ul>
              </li>
              <li className="header__navigation-menu-item">
                <a className="header__navigation-menu-link" href="#">
                  Shop
                  <svg className="header__navigation-link-icon">
                    <use href="img/svgSprite.svg#icon__chevron-down"></use>
                  </svg>
                </a>
                <ul className="header__navigation-drop-menu">
                  <li>
                    <a className="header__navigation-drop-menu-link" href="#">
                      Shop 1
                    </a>
                  </li>
                  <li>
                    <a className="header__navigation-drop-menu-link" href="#">
                      Shop 1
                    </a>
                  </li>
                  <li>
                    <a className="header__navigation-drop-menu-link" href="#">
                      Shop 1
                    </a>
                  </li>
                  <li>
                    <a className="header__navigation-drop-menu-link" href="#">
                      Shop 1
                    </a>
                  </li>
                </ul>
              </li>
              <li className="header__navigation-menu-item">
                <a className="header__navigation-menu-link" href="#">
                  Pages
                  <svg className="header__navigation-link-icon">
                    <use href="img/svgSprite.svg#icon__chevron-down"></use>
                  </svg>
                </a>
                <ul className="header__navigation-drop-menu">
                  <li>
                    <a className="header__navigation-drop-menu-link" href="#">
                      Pages 1
                    </a>
                  </li>
                  <li>
                    <a className="header__navigation-drop-menu-link" href="#">
                      Pages 1
                    </a>
                  </li>
                  <li>
                    <a className="header__navigation-drop-menu-link" href="#">
                      Pages 1
                    </a>
                  </li>
                  <li>
                    <a className="header__navigation-drop-menu-link" href="#">
                      Pages 1
                    </a>
                  </li>
                </ul>
              </li>
              <li className="header__navigation-menu-item">
                <a className="header__navigation-menu-link" href="#">
                  Blog
                  <svg className="header__navigation-link-icon">
                    <use href="img/svgSprite.svg#icon__chevron-down"></use>
                  </svg>
                </a>
                <ul className="header__navigation-drop-menu">
                  <li>
                    <a className="header__navigation-drop-menu-link" href="#">
                      Blog 1
                    </a>
                  </li>
                  <li>
                    <a className="header__navigation-drop-menu-link" href="#">
                      Blog 1
                    </a>
                  </li>
                  <li>
                    <a className="header__navigation-drop-menu-link" href="#">
                      Blog 1
                    </a>
                  </li>
                  <li>
                    <a className="header__navigation-drop-menu-link" href="#">
                      Blog 1
                    </a>
                  </li>
                </ul>
              </li>
              <li className="header__navigation-menu-item">
                <a className="header__navigation-menu-link" href="#">
                  About us
                </a>
              </li>
              <li className="header__navigation-menu-item">
                <a className="header__navigation-menu-link" href="#">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
          <div className="phone header__phone">
            <a className="phone" href='tel:(219) 555-0114"'>
              <svg className="phone__icon">
                <use href="img/svgSprite.svg#icon__phone"></use>
              </svg>
              <span className="phone__text">(219) 555-0114</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
