import { TProduct } from '@/entities/Product';
import cn from 'classnames';
import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';

import cls from './ProductWishlist.module.scss';

interface Props
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    data: Omit<TProduct, 'rating'>;
    actions?: ReactNode;
    className?: string;
}

export const ProductWishlist: FC<Props> = ({ className, actions }) => {
    return (
        <div className={cn(cls.productWishlist, className)}>
            <div className="productWishlistInfo">
                <img
                    className="productWishlistPhoto"
                    src="img/product-apple.jpg"
                    alt=""
                />
                <h3 className="productWishlistTitle">Green Capsicum</h3>
            </div>
            <div className="productWishlistPrice">
                <span className="productWishlistTriceNew">$14.99</span>
                <span className="productWishlistpriceOld">$20.99</span>
            </div>
            <div className="productWishlistStock tag tag--in-stock">
                In Stock
            </div>
            <div className="productWishlistActions">
                {/* <button className="button  button--fill button--normal productadd-to-cart-button">
                    <span>Add to Cart</span>
                </button>
                <button className="productdelete-button close-button">
                    <svg className="close-button__icon">
                        <use href="img/svgSprite.svg#icon__cross"></use>
                    </svg>
                </button> */}
                {actions}
            </div>
        </div>
    );
};
