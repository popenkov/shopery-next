
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import CartIcon from '@public/icons/icon__cart.svg';
import PreviewIcon from '@public/icons/icon__eye.svg';
import LikeIcon from '@public/icons/icon__heart-lined.svg';
import { TProduct } from 'entities/Product';
import { StarRating } from 'entities/StarRating';
import { getFormattedPrice } from 'shared/lib/utils/getFormattedPrice';
import { RoundButton } from 'shared/ui/Buttons';
import { Text } from 'shared/ui/Text';

import cls from './Product.module.scss';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: TProduct;
}

export const Product: FC<Props> = ({ data }) => {
  const { img, title, path, price, priceOld, rating } = data;

  return (
    <div className={cls.product}>
      <div className={cls.imageContainer}>
        <div className={cls.buttons}>
          <RoundButton theme="secondary" className={cls.imageButton}>
            <LikeIcon />
          </RoundButton>
          <RoundButton theme="secondary" className={cls.imageButton}>
            <PreviewIcon />
          </RoundButton>
        </div>
        <Image src={img} fill alt={title} className={cls.image} />
      </div>
      <div className={cls.description}>
        <div>
          <Link className={cls.link} href={`/products/${path}`}>
            <Text variant="body_s" className={cls.title}>
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
