import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { StarRating } from '@/entities/StarRating';
import { RoundButton } from '@/shared/ui/Buttons';
import CartIcon from '@public/icons/icon__cart.svg';
import PreviewIcon from '@public/icons/icon__eye.svg';
import LikeIcon from '@public/icons/icon__heart.svg';
import { TProduct } from '../../../';

import cls from './ProductSmall.module.scss';

interface Props
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    data: TProduct;
}

export const ProductSmall: FC<Props> = ({ data }) => {
    const { img, title, path, price, priceOld, rating } = data;
    return (
        <div className={cls.productSmall}>
            <Link className={cls.productImageLink} href={path}>
                <Image
                    className={cls.productImage}
                    src={img}
                    alt="product-xs"
                    fill
                />
            </Link>
            <div className={cls.productDescription}>
                <Link className=".link" href="#">
                    <h3 className={cls.productTitle}>{title}</h3>
                </Link>
                <div className=".description-container">
                    <div className={cls.productDescriptionMain}>
                        <p className={cls.productPrice}>
                            <span>${price}</span>
                            <span className={cls.productPriceOld}>
                                ${priceOld}
                            </span>
                        </p>
                        <div className={cls.productRating}>
                            <StarRating value={rating} />
                        </div>
                    </div>
                    <div className={cls.productDescriptionHover}>
                        <div className={cls.productActions}>
                            <RoundButton theme="primary">
                                <CartIcon />
                            </RoundButton>
                            <RoundButton theme="secondary">
                                <PreviewIcon />
                            </RoundButton>
                            <RoundButton theme="secondary">
                                <LikeIcon />
                            </RoundButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
