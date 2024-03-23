import React from 'react';

export const HeaderMiddle = () => {
  return (
    <div className="header__middle container">
      <button className="header__mobile-burger js-mobile-menu-btn">
        <span className="burger-button"></span>
      </button>
      <div className="logo header__logo">
        <svg className="logo__icon">
          <use href="img/svgSprite.svg#logo__default"></use>
        </svg>
      </div>
      <div className="logo  logo--mini header__logo-mobile">
        <svg className="logo__icon">
          <use href="img/svgSprite.svg#logo__mini"></use>
        </svg>
      </div>
      <div className="header__search d-desktop">
        <form className="search-form js-header-search-form">
          <label className="field  field--search">
            <input
              className="field__input field__input--search search-form__field"
              type="text"
              name="search"
              placeholder="search"
            />
            <svg className="field__search-icon">
              <use href="img/svgSprite.svg#icon__search"></use>
            </svg>
          </label>
          <button className="button  button--fill button--normal search-form__button">
            Search
          </button>
        </form>
      </div>
      <div className="header__navbar">
        <div className="header__favorite">
          <a className="header__favorite-link" href="#">
            <svg className="header__favorite-icon">
              <use href="img/svgSprite.svg#icon__heart"></use>
            </svg>
          </a>
        </div>
        <span className="header__navbar-separator"></span>
        <div className="header__cart">
          <a className="header__cart-link" href="#">
            <svg className="header__cart-icon">
              <use href="img/svgSprite.svg#icon__cart"></use>
            </svg>
            <span className="header__cart-items-amount">2</span>
          </a>
          <div className="header__cart-info">
            <span className="header__cart-title">Shopping cart:</span>
            <span className="header__cart-amount">$57.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};
