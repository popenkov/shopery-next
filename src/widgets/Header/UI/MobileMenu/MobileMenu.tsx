import { Location, PhoneLink } from '@/shared/ui';
import React from 'react';

export const MobileMenu = () => {
  return (
    <div className="header__mobile-menu mobile-menu js-mobile-menu">
      <div className="mobile-menu__content">
        <button className="mobile-menu__close-button close-button js-close-mobile-menu-btn">
          <svg className="close-button__icon">
            <use href="img/svgSprite.svg#icon__cross"></use>
          </svg>
        </button>
        <div className="header__search--mobile d-mobile">
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
        <div className="mobile-menu__navigation">
          <div className="accordion">
            <li className="accordion__item">
              <button className="accordion__button header__navigation-menu-link">
                Home
                <svg className="accordion__chevron-icon">
                  <use href="img/svgSprite.svg#icon__chevron-down"></use>
                </svg>
              </button>
              <ul className="accordion__content">
                <li className="header__navigation-menu-item">
                  <a className="header__navigation-menu-link" href="#">
                    Home 1
                  </a>
                </li>
                <li className="header__navigation-menu-item">
                  <a className="header__navigation-menu-link" href="#">
                    Home 1
                  </a>
                </li>
                <li className="header__navigation-menu-item">
                  <a className="header__navigation-menu-link" href="#">
                    Home 1
                  </a>
                </li>
                <li className="header__navigation-menu-item">
                  <a className="header__navigation-menu-link" href="#">
                    Home 1
                  </a>
                </li>
              </ul>
            </li>
            <li className="accordion__item">
              <button className="accordion__button header__navigation-menu-link">
                Shop
                <svg className="accordion__chevron-icon">
                  <use href="img/svgSprite.svg#icon__chevron-down"></use>
                </svg>
              </button>
              <ul className="accordion__content">
                <li className="header__navigation-menu-item">
                  <a className="header__navigation-menu-link" href="#">
                    Shop 1
                  </a>
                </li>
                <li className="header__navigation-menu-item">
                  <a className="header__navigation-menu-link" href="#">
                    Shop 1
                  </a>
                </li>
                <li className="header__navigation-menu-item">
                  <a className="header__navigation-menu-link" href="#">
                    Shop 1
                  </a>
                </li>
                <li className="header__navigation-menu-item">
                  <a className="header__navigation-menu-link" href="#">
                    Shop 1
                  </a>
                </li>
              </ul>
            </li>
            <li className="accordion__item">
              <button className="accordion__button header__navigation-menu-link">
                Pages
                <svg className="accordion__chevron-icon">
                  <use href="img/svgSprite.svg#icon__chevron-down"></use>
                </svg>
              </button>
              <ul className="accordion__content">
                <li className="header__navigation-menu-item">
                  <a className="header__navigation-menu-link" href="#">
                    Pages 1
                  </a>
                </li>
                <li className="header__navigation-menu-item">
                  <a className="header__navigation-menu-link" href="#">
                    Pages 1
                  </a>
                </li>
                <li className="header__navigation-menu-item">
                  <a className="header__navigation-menu-link" href="#">
                    Pages 1
                  </a>
                </li>
                <li className="header__navigation-menu-item">
                  <a className="header__navigation-menu-link" href="#">
                    Pages 1
                  </a>
                </li>
              </ul>
            </li>
            <li className="accordion__item">
              <button className="accordion__button header__navigation-menu-link">
                Blog
                <svg className="accordion__chevron-icon">
                  <use href="img/svgSprite.svg#icon__chevron-down"></use>
                </svg>
              </button>
              <ul className="accordion__content">
                <li className="header__navigation-menu-item">
                  <a className="header__navigation-menu-link" href="#">
                    Blog 1
                  </a>
                </li>
                <li className="header__navigation-menu-item">
                  <a className="header__navigation-menu-link" href="#">
                    Blog 1
                  </a>
                </li>
                <li className="header__navigation-menu-item">
                  <a className="header__navigation-menu-link" href="#">
                    Blog 1
                  </a>
                </li>
                <li className="header__navigation-menu-item">
                  <a className="header__navigation-menu-link" href="#">
                    Blog 1
                  </a>
                </li>
              </ul>
            </li>
          </div>
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
        </div>
        <div className="mobile-menu__footer">
          <div className="phone header__phone header__phone--mobile">
            <PhoneLink phone="(219) 555-0114" href="2195550114" />
          </div>
          <Location
            address="Store Location: Lincoln- 344, Illinois, Chicago, USA"
            className="header__top-location header__top-location--mobile"
          />
        </div>
      </div>
    </div>
  );
};
