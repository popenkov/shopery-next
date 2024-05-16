import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// todo перенести превью и корзину в фичи и экшны
import { StarRating } from 'entities/StarRating';
import { RoundButton } from 'shared/ui/Buttons';
import { HeartIcon, EyeIcon, CartIcon } from 'shared/ui/icons';

import { TProduct } from '../../../';

import cls from './ProductSmall.module.scss';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: TProduct;
}

export const ProductSmall: FC<Props> = ({ data }) => {
  const { img, title, path, price, priceOld, rating } = data;
  return (
    <div className={cls.productSmall}>
      <Link className={cls.productImageLink} href={path}>
        <Image className={cls.productImage} src={img} alt={title} fill />
      </Link>
      <div className={cls.productDescription}>
        <Link className={cls.link} href="#">
          <h3 className={cls.productTitle}>{title}</h3>
        </Link>
        <div>
          <div className={cls.productDescriptionMain}>
            <p className={cls.productPrice}>
              <span>${price}</span>
              <span className={cls.productPriceOld}>${priceOld}</span>
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
                <EyeIcon />
              </RoundButton>
              <RoundButton theme="secondary">
                <HeartIcon />
              </RoundButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
