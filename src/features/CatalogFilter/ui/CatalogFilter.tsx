'use client';

import {
    DetailedHTMLProps,
    FC,
    HTMLAttributes,
    useCallback,
    useState,
} from 'react';
import cn from 'classnames';

import cls from './CatalogFilter.module.scss';
import { Button, FilterButton } from '@/shared/UI';
import { FilterControllers } from './FilterControllers';

interface Props
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const CatalogFilter: FC<Props> = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const handleFilterButtonClick = useCallback(() => {
        console.log('click');
        setIsFilterOpen(true);
    }, []);

    return (
        <div className={cls.filter}>
            <FilterButton
                onClick={handleFilterButtonClick}
                className="aside-filter__filter-button"
            />

            <div className=" aside-filter__filter-menu-background">
                <div className="catalog-page__filter-accordion filter-accordion aside-filter__filter-menu">
                    {/* filter header*/}
                    <div className={cn(cls.header, 'd-mobile--flex')}>
                        <p className="aside-filter__title">Filter</p>
                        <button className="aside-filter__close-button js-filter-close-button">
                            <svg className="aside-filter__close-icon">
                                <use href="img/svgSprite.svg#icon__close"></use>
                            </svg>
                        </button>
                    </div>

                    <FilterControllers />

                    <div className={cls.footer}>
                        <Button size="large" className={cls.button}>
                            Apply filter
                        </Button>
                    </div>
                </div>
            </div>

            {/* banner */}
            {/* <div className="discount-banner aside-filter__banner aside-filter__banner--desktop">
        <img
          className="discount-banner__img"
          src="img/discount-banner--1.jpg"
          alt="discount banner"
        />
        <div className="discount-banner__text">
          <p className="discount-banner__title">
            <span className="discount-banner__title--bold">79%</span> Discount
          </p>
          <p className="discount-banner__subtitle">on your first order</p>
          <a
            className="button  button--ghost button--normal discount-banner__button icon-button"
            href="#"
          >
            <span className="icon-button__text">Shop Now</span>
            <svg className="icon-button__icon">
              <use href="img/svgSprite.svg#icon__arrow"></use>
            </svg>
          </a>
        </div>
      </div> */}
            {/* sale */}
            {/* <div className="aside-filter__products aside-filter__products--desktop">
        <p className="aside-filter__title">Sale Products</p>
        <div className="aside-filter__product-cards">
          <div className="product-xs">
            <a className="product-xs__image-link" href="#">
              <img
                className="product-xs__image"
                src="img/product-small--red-capsicum.jpg"
                alt="product-xs"
              />
            </a>
            <div className="product-xs__description">
              <a className="product-xs__link" href="#">
                <h3 className="product-xs__title">Red Capsicum</h3>
              </a>
              <div className="product-xs__description-container">
                <div className="product-xs__description-main">
                  <p className="product-xs__price">
                    <span>$32.00</span>
                    <span className="product-xs__price--old">$20.99</span>
                  </p>
                  <div className="product-xs__rating">
                    <div className="star-rating">
                      <svg className="star-rating__star star-rating__star--full">
                        <use href="img/svgSprite.svg#icon__star"></use>
                      </svg>
                      <svg className="star-rating__star star-rating__star--full">
                        <use href="img/svgSprite.svg#icon__star"></use>
                      </svg>
                      <svg className="star-rating__star star-rating__star--full">
                        <use href="img/svgSprite.svg#icon__star"></use>
                      </svg>
                      <svg className="star-rating__star star-rating__star--full">
                        <use href="img/svgSprite.svg#icon__star"></use>
                      </svg>
                      <svg className="star-rating__star">
                        <use href="img/svgSprite.svg#icon__star"></use>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="product-xs__description-hover">
                  <div className="product-xs__buttons">
                    <button className="button-round button-round--white-green">
                      <svg className="button-round__icon">
                        <use href="img/svgSprite.svg#icon__cart"></use>
                      </svg>
                    </button>
                    <button className="button-round button-round--white-green">
                      <svg className="button-round__icon">
                        <use href="img/svgSprite.svg#icon__eye"></use>
                      </svg>
                    </button>
                    <button className="button-round button-round--like">
                      <svg className="button-round__icon">
                        <use href="img/svgSprite.svg#icon__heart"></use>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product-xs">
            <a className="product-xs__image-link" href="#">
              <img
                className="product-xs__image"
                src="img/product-small--chanise-cabbage.jpg"
                alt="product-xs"
              />
            </a>
            <div className="product-xs__description">
              <a className="product-xs__link" href="#">
                <h3 className="product-xs__title">Chanise Cabbage</h3>
              </a>
              <div className="product-xs__description-container">
                <div className="product-xs__description-main">
                  <p className="product-xs__price">
                    <span>$24.00</span>
                    <span className="product-xs__price--old">$20.99</span>
                  </p>
                  <div className="product-xs__rating">
                    <div className="star-rating">
                      <svg className="star-rating__star star-rating__star--full">
                        <use href="img/svgSprite.svg#icon__star"></use>
                      </svg>
                      <svg className="star-rating__star star-rating__star--full">
                        <use href="img/svgSprite.svg#icon__star"></use>
                      </svg>
                      <svg className="star-rating__star star-rating__star--full">
                        <use href="img/svgSprite.svg#icon__star"></use>
                      </svg>
                      <svg className="star-rating__star star-rating__star--full">
                        <use href="img/svgSprite.svg#icon__star"></use>
                      </svg>
                      <svg className="star-rating__star">
                        <use href="img/svgSprite.svg#icon__star"></use>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="product-xs__description-hover">
                  <div className="product-xs__buttons">
                    <button className="button-round button-round--white-green">
                      <svg className="button-round__icon">
                        <use href="img/svgSprite.svg#icon__cart"></use>
                      </svg>
                    </button>
                    <button className="button-round button-round--white-green">
                      <svg className="button-round__icon">
                        <use href="img/svgSprite.svg#icon__eye"></use>
                      </svg>
                    </button>
                    <button className="button-round button-round--like">
                      <svg className="button-round__icon">
                        <use href="img/svgSprite.svg#icon__heart"></use>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product-xs">
            <a className="product-xs__image-link" href="#">
              <img
                className="product-xs__image"
                src="img/product-small--green-capsicum.jpg"
                alt="product-xs"
              />
            </a>
            <div className="product-xs__description">
              <a className="product-xs__link" href="#">
                <h3 className="product-xs__title">Green Capsicum</h3>
              </a>
              <div className="product-xs__description-container">
                <div className="product-xs__description-main">
                  <p className="product-xs__price">
                    <span>$32.00</span>
                    <span className="product-xs__price--old">$20.99</span>
                  </p>
                  <div className="product-xs__rating">
                    <div className="star-rating">
                      <svg className="star-rating__star star-rating__star--full">
                        <use href="img/svgSprite.svg#icon__star"></use>
                      </svg>
                      <svg className="star-rating__star star-rating__star--full">
                        <use href="img/svgSprite.svg#icon__star"></use>
                      </svg>
                      <svg className="star-rating__star star-rating__star--full">
                        <use href="img/svgSprite.svg#icon__star"></use>
                      </svg>
                      <svg className="star-rating__star star-rating__star--full">
                        <use href="img/svgSprite.svg#icon__star"></use>
                      </svg>
                      <svg className="star-rating__star">
                        <use href="img/svgSprite.svg#icon__star"></use>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="product-xs__description-hover">
                  <div className="product-xs__buttons">
                    <button className="button-round button-round--white-green">
                      <svg className="button-round__icon">
                        <use href="img/svgSprite.svg#icon__cart"></use>
                      </svg>
                    </button>
                    <button className="button-round button-round--white-green">
                      <svg className="button-round__icon">
                        <use href="img/svgSprite.svg#icon__eye"></use>
                      </svg>
                    </button>
                    <button className="button-round button-round--like">
                      <svg className="button-round__icon">
                        <use href="img/svgSprite.svg#icon__heart"></use>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
        </div>
    );
};
