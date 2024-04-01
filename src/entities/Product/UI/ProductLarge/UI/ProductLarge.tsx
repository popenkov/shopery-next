import Image from 'next/image';
import Link from 'next/link';
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import { ProductInterface } from '@/entities/Product';
import { StarRating } from '@/entities/StarRating';
import { RoundButton, Text } from '@/shared';
import { getFormattedPrice } from '@/shared/lib/utils/getFormattedPrice';
import CartIcon from '@public/icons/icon__cart.svg';
import PreviewIcon from '@public/icons/icon__eye.svg';
import LikeIcon from '@public/icons/icon__heart-lined.svg';

import cls from './ProductLarge.module.scss';

interface ProductLargeProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: ProductInterface;
}

export const ProductLarge: FC<ProductLargeProps> = ({ data }) => {
  const { img, title, path, price, priceOld, rating } = data;

  return (
    <div className={cls.product}>
      <div className={cls.imageContainer}>
        <div className={cls.buttons}>
          <RoundButton theme="primary_inversed" className={cls.imageButton}>
            <LikeIcon />
          </RoundButton>
          <RoundButton theme="primary_inversed" className={cls.imageButton}>
            <PreviewIcon />
          </RoundButton>
        </div>
        <Image src={img} fill alt={title} className={cls.image} />
      </div>
      <div className={cls.description}>
        <div>
          <Link className={cls.link} href={`/products/${path}`}>
            <Text variant="heading_4" className={cls.title}>
              {title}
            </Text>
          </Link>
          <div className={cls.price}>
            <Text variant="body_m" weight="medium">
              {getFormattedPrice(price)}
            </Text>
            {priceOld && (
              <Text variant="body_m" weight="medium" className={cls.priceOld}>
                {getFormattedPrice(priceOld)}
              </Text>
            )}
          </div>
          <StarRating value={rating} />
        </div>
        <RoundButton theme="primary" className={cls.button}>
          <CartIcon />
        </RoundButton>
      </div>
    </div>
  );
};
