import { FC } from 'react';

import { ProductDetailedTabs, RelatedProducts } from 'widgets/ProductDetailed';
import { AddToCartCounter, AddToFavorites } from 'features/Product';
import { Breadcrumbs } from 'entities/Breadcrumps';
import { ProductDescription, getProductDetails } from 'entities/Product';
import { AppRouteNames } from 'shared/interfaces/router';

import cls from './Product.module.scss';

const Product: FC = () => {
  const data = getProductDetails();

  const crumbs = [AppRouteNames.HOME, AppRouteNames.CATALOG, data.title];

  return (
    <div data-testid="productPage" className={cls.product}>
      <Breadcrumbs items={crumbs} />
      <div className="product-page">
        <ProductDescription
          data={data}
          actions={
            <>
              <AddToCartCounter />
              <AddToFavorites className={cls.productFavoriteButton} />
            </>
          }
        />

        <ProductDetailedTabs
          ad={data.ad}
          descriptions={data.descriptions}
          specs={data.specs}
          feedback={data.feedback}
        />

        <RelatedProducts data={data.relatedProducts} />

        {/* related products */}
        {/* <div className="product-page__related-products">
                    <h2 className="product-page__related-products-title container">
                        Related Products
                    </h2>
                    <div className="section__content--large">
                        <div className="grid grid__four-items d-desktop container g-24">
                            <div className="product product-page__related-product">
                                <div className="product__image-container">
                                    <div className="product__tags">
                                        <div className="tag tag--sale">
                                            Sale 50%
                                        </div>
                                    </div>
                                    <div className="product__buttons">
                                        <button className="button-round button-round--like product__image-button">
                                            <svg className="button-round__icon">
                                                <use href="img/svgSprite.svg#icon__heart-lined"></use>
                                            </svg>
                                        </button>
                                        <button
                                            className="button-round button-round--white-green product__image-button"
                                            data-hystmodal="#productPreview"
                                        >
                                            <svg className="button-round__icon">
                                                <use href="img/svgSprite.svg#icon__eye"></use>
                                            </svg>
                                        </button>
                                    </div>
                                    <img
                                        className="product__image"
                                        src="img/product-apple.jpg"
                                        alt="product"
                                    />
                                </div>
                                <div className="product__description">
                                    <div className="product__description-text">
                                        <a className="product__link" href="#">
                                            <h3 className="product__title">
                                                Green Apple
                                            </h3>
                                        </a>
                                        <p className="product__price">
                                            <span>$14.99</span>
                                            <span className="product__price--old">
                                                $20.99
                                            </span>
                                        </p>
                                        <div className="product__rating">
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
                                    <button className="button-round product__button">
                                        <svg className="button-round__icon">
                                            <use href="img/svgSprite.svg#icon__cart"></use>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="product product-page__related-product">
                                <div className="product__image-container">
                                    <div className="product__buttons">
                                        <button className="button-round button-round--like product__image-button">
                                            <svg className="button-round__icon">
                                                <use href="img/svgSprite.svg#icon__heart-lined"></use>
                                            </svg>
                                        </button>
                                        <button
                                            className="button-round button-round--white-green product__image-button"
                                            data-hystmodal="#productPreview"
                                        >
                                            <svg className="button-round__icon">
                                                <use href="img/svgSprite.svg#icon__eye"></use>
                                            </svg>
                                        </button>
                                    </div>
                                    <img
                                        className="product__image"
                                        src="img/product-mango.jpg"
                                        alt="product"
                                    />
                                </div>
                                <div className="product__description">
                                    <div className="product__description-text">
                                        <a className="product__link" href="#">
                                            <h3 className="product__title">
                                                Surjapur Mango
                                            </h3>
                                        </a>
                                        <p className="product__price">
                                            <span>$14.99</span>
                                        </p>
                                        <div className="product__rating">
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
                                    <button className="button-round product__button">
                                        <svg className="button-round__icon">
                                            <use href="img/svgSprite.svg#icon__cart"></use>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="product product-page__related-product">
                                <div className="product__image-container">
                                    <div className="product__buttons">
                                        <button className="button-round button-round--like product__image-button">
                                            <svg className="button-round__icon">
                                                <use href="img/svgSprite.svg#icon__heart-lined"></use>
                                            </svg>
                                        </button>
                                        <button
                                            className="button-round button-round--white-green product__image-button"
                                            data-hystmodal="#productPreview"
                                        >
                                            <svg className="button-round__icon">
                                                <use href="img/svgSprite.svg#icon__eye"></use>
                                            </svg>
                                        </button>
                                    </div>
                                    <img
                                        className="product__image"
                                        src="img/product-tomatos.jpg"
                                        alt="product"
                                    />
                                </div>
                                <div className="product__description">
                                    <div className="product__description-text">
                                        <a className="product__link" href="#">
                                            <h3 className="product__title">
                                                Red Tomatos
                                            </h3>
                                        </a>
                                        <p className="product__price">
                                            <span>$14.99</span>
                                        </p>
                                        <div className="product__rating">
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
                                    <button className="button-round product__button">
                                        <svg className="button-round__icon">
                                            <use href="img/svgSprite.svg#icon__cart"></use>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="product product-page__related-product">
                                <div className="product__image-container">
                                    <div className="product__buttons">
                                        <button className="button-round button-round--like product__image-button">
                                            <svg className="button-round__icon">
                                                <use href="img/svgSprite.svg#icon__heart-lined"></use>
                                            </svg>
                                        </button>
                                        <button
                                            className="button-round button-round--white-green product__image-button"
                                            data-hystmodal="#productPreview"
                                        >
                                            <svg className="button-round__icon">
                                                <use href="img/svgSprite.svg#icon__eye"></use>
                                            </svg>
                                        </button>
                                    </div>
                                    <img
                                        className="product__image"
                                        src="img/product-cauliflower.jpg"
                                        alt="product"
                                    />
                                </div>
                                <div className="product__description">
                                    <div className="product__description-text">
                                        <a className="product__link" href="#">
                                            <h3 className="product__title">
                                                Fresh Cauliflower
                                            </h3>
                                        </a>
                                        <p className="product__price">
                                            <span>$14.99</span>
                                        </p>
                                        <div className="product__rating">
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
                                    <button className="button-round product__button">
                                        <svg className="button-round__icon">
                                            <use href="img/svgSprite.svg#icon__cart"></use>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mobile-slider d-mobile container">
                            <div className="swiper mobile-slider__slider js-mobile-slider">
                                <div className="swiper-wrapper mobile-slider__wrapper">
                                    <div className="swiper-slide mobile-slider__slide">
                                        <div className="product">
                                            <div className="product__image-container">
                                                <div className="product__tags">
                                                    <div className="tag tag--sale">
                                                        Sale 50%
                                                    </div>
                                                </div>
                                                <div className="product__buttons">
                                                    <button className="button-round button-round--like product__image-button">
                                                        <svg className="button-round__icon">
                                                            <use href="img/svgSprite.svg#icon__heart-lined"></use>
                                                        </svg>
                                                    </button>
                                                    <button
                                                        className="button-round button-round--white-green product__image-button"
                                                        data-hystmodal="#productPreview"
                                                    >
                                                        <svg className="button-round__icon">
                                                            <use href="img/svgSprite.svg#icon__eye"></use>
                                                        </svg>
                                                    </button>
                                                </div>
                                                <img
                                                    className="product__image"
                                                    src="img/product-apple.jpg"
                                                    alt="product"
                                                />
                                            </div>
                                            <div className="product__description">
                                                <div className="product__description-text">
                                                    <a
                                                        className="product__link"
                                                        href="#"
                                                    >
                                                        <h3 className="product__title">
                                                            Green Apple
                                                        </h3>
                                                    </a>
                                                    <p className="product__price">
                                                        <span>$14.99</span>
                                                        <span className="product__price--old">
                                                            $20.99
                                                        </span>
                                                    </p>
                                                    <div className="product__rating">
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
                                                <button className="button-round product__button">
                                                    <svg className="button-round__icon">
                                                        <use href="img/svgSprite.svg#icon__cart"></use>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide mobile-slider__slide">
                                        <div className="product">
                                            <div className="product__image-container">
                                                <div className="product__buttons">
                                                    <button className="button-round button-round--like product__image-button">
                                                        <svg className="button-round__icon">
                                                            <use href="img/svgSprite.svg#icon__heart-lined"></use>
                                                        </svg>
                                                    </button>
                                                    <button
                                                        className="button-round button-round--white-green product__image-button"
                                                        data-hystmodal="#productPreview"
                                                    >
                                                        <svg className="button-round__icon">
                                                            <use href="img/svgSprite.svg#icon__eye"></use>
                                                        </svg>
                                                    </button>
                                                </div>
                                                <img
                                                    className="product__image"
                                                    src="img/product-mango.jpg"
                                                    alt="product"
                                                />
                                            </div>
                                            <div className="product__description">
                                                <div className="product__description-text">
                                                    <a
                                                        className="product__link"
                                                        href="#"
                                                    >
                                                        <h3 className="product__title">
                                                            Surjapur Mango
                                                        </h3>
                                                    </a>
                                                    <p className="product__price">
                                                        <span>$14.99</span>
                                                    </p>
                                                    <div className="product__rating">
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
                                                <button className="button-round product__button">
                                                    <svg className="button-round__icon">
                                                        <use href="img/svgSprite.svg#icon__cart"></use>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide mobile-slider__slide">
                                        <div className="product">
                                            <div className="product__image-container">
                                                <div className="product__buttons">
                                                    <button className="button-round button-round--like product__image-button">
                                                        <svg className="button-round__icon">
                                                            <use href="img/svgSprite.svg#icon__heart-lined"></use>
                                                        </svg>
                                                    </button>
                                                    <button
                                                        className="button-round button-round--white-green product__image-button"
                                                        data-hystmodal="#productPreview"
                                                    >
                                                        <svg className="button-round__icon">
                                                            <use href="img/svgSprite.svg#icon__eye"></use>
                                                        </svg>
                                                    </button>
                                                </div>
                                                <img
                                                    className="product__image"
                                                    src="img/product-tomatos.jpg"
                                                    alt="product"
                                                />
                                            </div>
                                            <div className="product__description">
                                                <div className="product__description-text">
                                                    <a
                                                        className="product__link"
                                                        href="#"
                                                    >
                                                        <h3 className="product__title">
                                                            Red Tomatos
                                                        </h3>
                                                    </a>
                                                    <p className="product__price">
                                                        <span>$14.99</span>
                                                    </p>
                                                    <div className="product__rating">
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
                                                <button className="button-round product__button">
                                                    <svg className="button-round__icon">
                                                        <use href="img/svgSprite.svg#icon__cart"></use>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide mobile-slider__slide">
                                        <div className="product">
                                            <div className="product__image-container">
                                                <div className="product__buttons">
                                                    <button className="button-round button-round--like product__image-button">
                                                        <svg className="button-round__icon">
                                                            <use href="img/svgSprite.svg#icon__heart-lined"></use>
                                                        </svg>
                                                    </button>
                                                    <button
                                                        className="button-round button-round--white-green product__image-button"
                                                        data-hystmodal="#productPreview"
                                                    >
                                                        <svg className="button-round__icon">
                                                            <use href="img/svgSprite.svg#icon__eye"></use>
                                                        </svg>
                                                    </button>
                                                </div>
                                                <img
                                                    className="product__image"
                                                    src="img/product-cauliflower.jpg"
                                                    alt="product"
                                                />
                                            </div>
                                            <div className="product__description">
                                                <div className="product__description-text">
                                                    <a
                                                        className="product__link"
                                                        href="#"
                                                    >
                                                        <h3 className="product__title">
                                                            Fresh Cauliflower
                                                        </h3>
                                                    </a>
                                                    <p className="product__price">
                                                        <span>$14.99</span>
                                                    </p>
                                                    <div className="product__rating">
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
                                                <button className="button-round product__button">
                                                    <svg className="button-round__icon">
                                                        <use href="img/svgSprite.svg#icon__cart"></use>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mobile-slider__pagination swiper-pagination"></div>
                            </div>
                        </div>
                    </div>
                </div> */}
        {/* <div className="subscription js-subscription product-page__subscription">
                    <div className="subscription__container container">
                        <div className="logo  logo--large subscription__logo">
                            <svg className="logo__icon">
                                <use href="img/svgSprite.svg#logo__default"></use>
                            </svg>
                            <h1 className="visually-hidden">shopery</h1>
                        </div>
                        <div className="subscription__text">
                            <h2 className="subscription__title">
                                Subcribe our Newsletter
                            </h2>
                            <p className="subscription__subtitle">
                                Pellentesque eu nibh eget mauris congue mattis
                                matti.
                            </p>
                        </div>
                        <form className="subscription-form">
                            <label className="field  field--text">
                                <input
                                    className="field__input field__input--text subscription-form__input"
                                    type="text"
                                    name="subscription-email"
                                    placeholder="Your email address"
                                />
                            </label>
                            <button className="button  button--fill button--large subscription-form__button">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div> */}
      </div>
    </div>
  );
};

export default Product;
