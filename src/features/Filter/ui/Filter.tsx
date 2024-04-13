'use client';

import {
    DetailedHTMLProps,
    FC,
    HTMLAttributes,
    ReactNode,
    useCallback,
    useState,
} from 'react';
import cn from 'classnames';

import cls from './Filter.module.scss';
import { Button, FilterButton } from '@/shared/UI';
import { FilterControllers } from './FilterControllers';
import { ProductInterface } from '@/entities/Product';

interface Props
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    banner?: ReactNode;
    saleProducts?: ProductInterface[];
    renderSaleProducts?: (product: ProductInterface) => ReactNode;
}

export const Filter: FC<Props> = ({
    banner,
    saleProducts,
    renderSaleProducts,
}) => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const handleFilterButtonClick = useCallback(() => {
        console.log('click');
        setIsFilterOpen(true);
    }, []);

    return (
        <div className={cls.filter}>
            <FilterButton
                onClick={handleFilterButtonClick}
                className={cls.filterButton}
            />

            <div className={cls.filterMenuBackground}>
                <div className={cls.filterMenu}>
                    {/* filter header*/}
                    <div className={cn(cls.header, 'd-mobile--flex')}>
                        <p className=".title">Filter</p>
                        <button className=".close-button js-filter-close-button">
                            <svg className=".close-icon">
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

            {/* desktop banner */}
            <div className={cls.bannerDesktop}>{banner}</div>

            {/* desktop sale items */}
            {saleProducts && renderSaleProducts && (
                <div>
                    {saleProducts.map((product) => (
                        <div key={product.id}>
                            {renderSaleProducts(product)}
                        </div>
                    ))}
                </div>
            )}

            {/* <div className=".products .products--desktop">
        <p className=".title">Sale Products</p>
        <div className=".product-cards">
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
