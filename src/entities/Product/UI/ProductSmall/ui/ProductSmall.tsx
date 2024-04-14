import { ProductInterface } from '../../../';
import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import cls from './ProductSmall.module.scss';
import { StarRating } from '@/entities/StarRating';

interface Props
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    data: ProductInterface;
}

export const ProductSmall: FC<Props> = ({ data }) => {
    const { img, title, path, price, priceOld, rating } = data;
    return (
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
                            <span className="product-xs__price--old">
                                $20.99
                            </span>
                        </p>
                        <div className="product-xs__rating">
                            <StarRating value={rating} />
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
    );
};
