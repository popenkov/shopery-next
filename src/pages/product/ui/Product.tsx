import { FC } from 'react';

import { Breadcrumbs } from '@/entities/Breadcrumps';

import cls from './Product.module.scss';
import { AppRouteNames } from '@/shared/interfaces/router';
import { getProductDetails } from '@/entities/Product/api/get-product-details';
import { ProductDescription } from '@/entities/Product';
import { AddToCartCounter } from '@/features/Product/add-to-cart-counter/AddToCartCounter';
import { AddToFavorites } from '@/features/Product/add-to-favorites/AddToFavorites';

const Product: FC = () => {
    const { sliderImages, title } = getProductDetails();

    const crumbs = [AppRouteNames.HOME, AppRouteNames.CATALOG, title];

    return (
        <div data-testid="productPage" className={cls.product}>
            <Breadcrumbs items={crumbs} />
            <div className="product-page">
                <ProductDescription
                    sliderImages={sliderImages}
                    actions={
                        <>
                            <AddToCartCounter />
                            <AddToFavorites
                                className={cls.productFavoriteButton}
                            />
                        </>
                    }
                />
                {/* tabs */}
                {/* <div className="product-page__tabs">
                    <div className="tabs section__content">
                        <div className="tabs__labels product-page__tabs-labels">
                            <div className="tabs__labels-content container">
                                <div className="tabs__scroll-container">
                                    <button
                                        className="tabs__label product-page__tabs-label tabs__label--active"
                                        data-href="#tab1"
                                    >
                                        Descriptions
                                    </button>
                                    <button
                                        className="tabs__label product-page__tabs-label"
                                        data-href="#tab2"
                                    >
                                        Additional Information
                                    </button>
                                    <button
                                        className="tabs__label product-page__tabs-label"
                                        data-href="#tab3"
                                    >
                                        Customer Feedback
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="tabs__panes container">
                            <div
                                className="tabs__pane tabs__pane--active"
                                id="tab1"
                            >
                                <div className="product-page__tabs-content js-tab-content">
                                    <div className="product-page__description">
                                        <p className="product-page__paragraph">
                                            Sed commodo aliquam dui ac porta.
                                            Fusce ipsum felis, imperdiet at
                                            posuere ac, viverra at mauris.
                                            Maecenas tincidunt ligula a sem
                                            vestibulum pharetra. Maecenas auctor
                                            tortor lacus, nec laoreet nisi
                                            porttitor vel. Etiam tincidunt metus
                                            vel dui interdum sollicitudin.
                                            Mauris sem ante, vestibulum nec orci
                                            vitae, aliquam mollis lacus. Sed et
                                            condimentum arcu, id molestie
                                            tellus. Nulla facilisi. Nam
                                            scelerisque vitae justo a convallis.
                                            Morbi urna ipsum, placerat quis
                                            commodo quis, egestas elementum leo.
                                            Donec convallis mollis enim. Aliquam
                                            id mi quam. Phasellus nec fringilla
                                            elit.
                                        </p>
                                        <p className="product-page__paragraph">
                                            Nulla mauris tellus, feugiat quis
                                            pharetra sed, gravida ac dui. Sed
                                            iaculis, metus faucibus elementum
                                            tincidunt, turpis mi viverra velit,
                                            pellentesque tristique neque mi eget
                                            nulla. Proin luctus elementum neque
                                            et pharetra.
                                        </p>
                                        <ul className="product-page__list">
                                            <li className="product-page__list-item">
                                                100 g of fresh leaves provides.
                                            </li>
                                            <li className="product-page__list-item">
                                                Aliquam ac est at augue volutpat
                                                elementum.
                                            </li>
                                            <li className="product-page__list-item">
                                                Quisque nec enim eget sapien
                                                molestie.
                                            </li>
                                            <li className="product-page__list-item">
                                                Proin convallis odio volutpat
                                                finibus posuere.
                                            </li>
                                        </ul>
                                        <p className="product-page__paragraph">
                                            Cras et diam maximus, accumsan
                                            sapien et, sollicitudin velit. Nulla
                                            blandit eros non turpis lobortis
                                            iaculis at ut massa.
                                        </p>
                                    </div>
                                    <div className="product-page__right-aside">
                                        <div
                                            className="video  video--secondary-button product-page__video"
                                            data-video="https://www.youtube.com/embed/2eX2TCfiFuY"
                                        >
                                            <div
                                                className="video__preview with-overlay js-video-preview"
                                                style={{
                                                    backgroundImage:
                                                        'url("img/tab-video-preview.jpg")',
                                                }}
                                            >
                                                <div className="video__text">
                                                    <button className="video__play-button js-video-play-button">
                                                        <svg className="video__play-icon">
                                                            <use href="img/svgSprite.svg#icon__play"></use>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-page__advantages">
                                            <div className="product-page__advantage advantage-label">
                                                <svg className="advantage-label__icon">
                                                    <use href="img/svgSprite.svg#icon__price-tag"></use>
                                                </svg>
                                                <div className="advantage-label__text">
                                                    <h3 className="advantage-label__title">
                                                        64% Discount
                                                    </h3>
                                                    <p className="advantage-label__subtitle">
                                                        Save your 64% money with
                                                        us
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="product-page__advantage advantage-label">
                                                <svg className="advantage-label__icon">
                                                    <use href="img/svgSprite.svg#icon__leaf"></use>
                                                </svg>
                                                <div className="advantage-label__text">
                                                    <h3 className="advantage-label__title">
                                                        100% Organic
                                                    </h3>
                                                    <p className="advantage-label__subtitle">
                                                        100% Organic Vegetables
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tabs__pane" id="tab2">
                                <div className="product-page__tabs-content js-tab-content">
                                    <div className="product-page__description">
                                        <div className="product-page__specs">
                                            <div className="product-page__spec">
                                                <span className="product-page__spec-title">
                                                    Weight:
                                                </span>
                                                <span className="product-page__spec-value">
                                                    03
                                                </span>
                                            </div>
                                            <div className="product-page__spec">
                                                <span className="product-page__spec-title">
                                                    Color:
                                                </span>
                                                <span className="product-page__spec-value">
                                                    green
                                                </span>
                                            </div>
                                            <div className="product-page__spec">
                                                <span className="product-page__spec-title">
                                                    Type:
                                                </span>
                                                <span className="product-page__spec-value">
                                                    Organic
                                                </span>
                                            </div>
                                            <div className="product-page__spec">
                                                <span className="product-page__spec-title">
                                                    Category:
                                                </span>
                                                <span className="product-page__spec-value">
                                                    Vegetables
                                                </span>
                                            </div>
                                            <div className="product-page__spec">
                                                <span className="product-page__spec-title">
                                                    Stock Status:
                                                </span>
                                                <span className="product-page__spec-value">
                                                    Available (5,413)
                                                </span>
                                            </div>
                                            <div className="product-page__spec">
                                                <span className="product-page__spec-title">
                                                    Tags:
                                                </span>
                                                <span className="product-page__spec-value">
                                                    <a
                                                        className="product-page__spec-link"
                                                        href="#"
                                                    >
                                                        Vegetables
                                                    </a>
                                                    <a
                                                        className="product-page__spec-link"
                                                        href="#"
                                                    >
                                                        Healthy
                                                    </a>
                                                    <a
                                                        className="product-page__spec-link"
                                                        href="#"
                                                    >
                                                        Chinese
                                                    </a>
                                                    <a
                                                        className="product-page__spec-link"
                                                        href="#"
                                                    >
                                                        Cabbage
                                                    </a>
                                                    <a
                                                        className="product-page__spec-link"
                                                        href="#"
                                                    >
                                                        Green Cabbage
                                                    </a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-page__right-aside">
                                        <div
                                            className="video  video--secondary-button product-page__video"
                                            data-video="https://www.youtube.com/embed/2eX2TCfiFuY"
                                        >
                                            <div
                                                className="video__preview with-overlay js-video-preview"
                                                style={{
                                                    backgroundImage:
                                                        'url("img/tab-video-preview.jpg")',
                                                }}
                                            >
                                                <div className="video__text">
                                                    <button className="video__play-button js-video-play-button">
                                                        <svg className="video__play-icon">
                                                            <use href="img/svgSprite.svg#icon__play"></use>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-page__advantages">
                                            <div className="product-page__advantage advantage-label">
                                                <svg className="advantage-label__icon">
                                                    <use href="img/svgSprite.svg#icon__price-tag"></use>
                                                </svg>
                                                <div className="advantage-label__text">
                                                    <h3 className="advantage-label__title">
                                                        64% Discount
                                                    </h3>
                                                    <p className="advantage-label__subtitle">
                                                        Save your 64% money with
                                                        us
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="product-page__advantage advantage-label">
                                                <svg className="advantage-label__icon">
                                                    <use href="img/svgSprite.svg#icon__leaf"></use>
                                                </svg>
                                                <div className="advantage-label__text">
                                                    <h3 className="advantage-label__title">
                                                        100% Organic
                                                    </h3>
                                                    <p className="advantage-label__subtitle">
                                                        100% Organic Vegetables
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tabs__pane" id="tab3">
                                <div className="product-page__tabs-content js-tab-content">
                                    <div className="product-page__description product-page__reviews js-reviews-container">
                                        <div className="review-item product-page__review">
                                            <div className="review-item__header">
                                                <div className="review-item__author">
                                                    <img
                                                        className="review-item__avatar"
                                                        src="img/review-avatar--1.jpg"
                                                        alt="avatar"
                                                    />
                                                    <span className="review-item__name">
                                                        Kristin Watson
                                                    </span>
                                                    <div className="review-item__rating">
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
                                                            <svg className="star-rating__star star-rating__star--full">
                                                                <use href="img/svgSprite.svg#icon__star"></use>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="review-item__date">
                                                    2 min ago
                                                </div>
                                            </div>
                                            <p className="review-item__main">
                                                Duis at ullamcorper nulla, eu
                                                dictum eros.
                                            </p>
                                        </div>
                                        <div className="review-item product-page__review">
                                            <div className="review-item__header">
                                                <div className="review-item__author">
                                                    <img
                                                        className="review-item__avatar"
                                                        src="img/review-avatar-default.jpg"
                                                        alt="avatar"
                                                    />
                                                    <span className="review-item__name">
                                                        Jane Cooper
                                                    </span>
                                                    <div className="review-item__rating">
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
                                                <div className="review-item__date">
                                                    30 Apr, 2021
                                                </div>
                                            </div>
                                            <p className="review-item__main">
                                                Keep the soil evenly moist for
                                                the healthiest growth. If the
                                                sun gets too hot, Chinese
                                                cabbage tends to
                                                &quot;bolt&quot; or go to seed;
                                                in long periods of heat, some
                                                kind of shade may be helpful.
                                                Watch out for snails, as they
                                                will harm the plants.
                                            </p>
                                        </div>
                                        <div className="review-item product-page__review">
                                            <div className="review-item__header">
                                                <div className="review-item__author">
                                                    <img
                                                        className="review-item__avatar"
                                                        src="img/review-avatar--2.jpg"
                                                        alt="avatar"
                                                    />
                                                    <span className="review-item__name">
                                                        Jacob Jones
                                                    </span>
                                                    <div className="review-item__rating">
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
                                                            <svg className="star-rating__star star-rating__star--full">
                                                                <use href="img/svgSprite.svg#icon__star"></use>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="review-item__date">
                                                    2 min ago
                                                </div>
                                            </div>
                                            <p className="review-item__main">
                                                {' '}
                                                Vivamus eget euismod magna. Nam
                                                sed lacinia nibh, et lacinia
                                                lacus.
                                            </p>
                                        </div>
                                        <div className="review-item product-page__review">
                                            <div className="review-item__header">
                                                <div className="review-item__author">
                                                    <img
                                                        className="review-item__avatar"
                                                        src="img/review-avatar--3.jpg"
                                                        alt="avatar"
                                                    />
                                                    <span className="review-item__name">
                                                        Ralph Edwards
                                                    </span>
                                                    <div className="review-item__rating">
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
                                                            <svg className="star-rating__star star-rating__star--full">
                                                                <use href="img/svgSprite.svg#icon__star"></use>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="review-item__date">
                                                    2 min ago
                                                </div>
                                            </div>
                                            <p className="review-item__main">
                                                200+ Canton Pak Choi Bok Choy
                                                Chinese Cabbage Seeds Heirloom
                                                Non-GMO Productive Brassica rapa
                                                VAR. chinensis, a.k.a. Canton's
                                                Choice, Bok Choi, from USA
                                            </p>
                                        </div>
                                        <div className="review-item product-page__review">
                                            <div className="review-item__header">
                                                <div className="review-item__author">
                                                    <img
                                                        className="review-item__avatar"
                                                        src="img/review-avatar-default.jpg"
                                                        alt="avatar"
                                                    />
                                                    <span className="review-item__name">
                                                        Jane Cooper
                                                    </span>
                                                    <div className="review-item__rating">
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
                                                <div className="review-item__date">
                                                    30 Apr, 2021
                                                </div>
                                            </div>
                                            <p className="review-item__main">
                                                Keep the soil evenly moist for
                                                the healthiest growth. If the
                                                sun gets too hot, Chinese
                                                cabbage tends to
                                                &quot;bolt&quot; or go to seed;
                                                in long periods of heat, some
                                                kind of shade may be helpful.
                                                Watch out for snails, as they
                                                will harm the plants.
                                            </p>
                                        </div>
                                        <div className="review-item product-page__review">
                                            <div className="review-item__header">
                                                <div className="review-item__author">
                                                    <img
                                                        className="review-item__avatar"
                                                        src="img/review-avatar--2.jpg"
                                                        alt="avatar"
                                                    />
                                                    <span className="review-item__name">
                                                        Jacob Jones
                                                    </span>
                                                    <div className="review-item__rating">
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
                                                            <svg className="star-rating__star star-rating__star--full">
                                                                <use href="img/svgSprite.svg#icon__star"></use>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="review-item__date">
                                                    2 min ago
                                                </div>
                                            </div>
                                            <p className="review-item__main">
                                                {' '}
                                                Vivamus eget euismod magna. Nam
                                                sed lacinia nibh, et lacinia
                                                lacus.
                                            </p>
                                        </div>
                                        <div className="review-item product-page__review">
                                            <div className="review-item__header">
                                                <div className="review-item__author">
                                                    <img
                                                        className="review-item__avatar"
                                                        src="img/review-avatar-default.jpg"
                                                        alt="avatar"
                                                    />
                                                    <span className="review-item__name">
                                                        Jane Cooper
                                                    </span>
                                                    <div className="review-item__rating">
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
                                                <div className="review-item__date">
                                                    30 Apr, 2021
                                                </div>
                                            </div>
                                            <p className="review-item__main">
                                                Keep the soil evenly moist for
                                                the healthiest growth. If the
                                                sun gets too hot, Chinese
                                                cabbage tends to
                                                &quot;bolt&quot; or go to seed;
                                                in long periods of heat, some
                                                kind of shade may be helpful.
                                                Watch out for snails, as they
                                                will harm the plants.
                                            </p>
                                        </div>
                                        <div className="review-item product-page__review">
                                            <div className="review-item__header">
                                                <div className="review-item__author">
                                                    <img
                                                        className="review-item__avatar"
                                                        src="img/review-avatar--2.jpg"
                                                        alt="avatar"
                                                    />
                                                    <span className="review-item__name">
                                                        Jacob Jones
                                                    </span>
                                                    <div className="review-item__rating">
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
                                                            <svg className="star-rating__star star-rating__star--full">
                                                                <use href="img/svgSprite.svg#icon__star"></use>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="review-item__date">
                                                    2 min ago
                                                </div>
                                            </div>
                                            <p className="review-item__main">
                                                {' '}
                                                Vivamus eget euismod magna. Nam
                                                sed lacinia nibh, et lacinia
                                                lacus.
                                            </p>
                                        </div>
                                        <button className="button  button--light button--normal product-page__show-button js-show-all-reviews-button">
                                            <span>Load More</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
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
