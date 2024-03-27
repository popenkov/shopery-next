import Image from 'next/image';
import Link from 'next/link';
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import { ProductInterface } from '@/shared/interfaces/common';
import CartIcon from '@public/icons/icon__cart.svg';
import PreviewIcon from '@public/icons/icon__eye.svg';
import LikeIcon from '@public/icons/icon__heart-lined.svg';

import cls from './Product.module.scss';
import {
  RoundButton,
  RoundButtonTheme,
  StarRating,
  Text,
  TextVariant,
  TextWeight,
} from '../../../shared/UI';

interface ProductProps
  extends Omit<
      DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
      'title'
    >,
    ProductInterface {}

export const Product: FC<ProductProps> = (props) => {
  const { img, title, href, price, priceOld, rating } = props;

  return (
    <div className={cls.product}>
      <div className={cls.imageContainer}>
        <div className={cls.buttons}>
          <div className={cls.buttons}>
            <RoundButton
              theme={RoundButtonTheme.PRIMARYINVERSED}
              className={cls.imageButton}
            >
              <LikeIcon />
            </RoundButton>
            <RoundButton
              theme={RoundButtonTheme.PRIMARYINVERSED}
              className={cls.imageButton}
            >
              <PreviewIcon />
            </RoundButton>
          </div>
        </div>
        <Image src={img} fill alt={title} className={cls.image} />
      </div>
      <div className={cls.description}>
        <div>
          <Link className={cls.link} href={href}>
            <Text
              text={title}
              variant={TextVariant.HEADING_4}
              className={cls.title}
            >
              {title}
            </Text>
          </Link>
          <div className={cls.price}>
            <Text
              text={price}
              size={TextVariant.BODY_M}
              weight={TextWeight.MEDIUM}
            >
              {price}
            </Text>
            {priceOld && (
              <Text
                text={price}
                size={TextVariant.BODY_M}
                weight={TextWeight.MEDIUM}
                className={cls.priceOld}
              >
                {priceOld}
              </Text>
            )}
          </div>
          <StarRating value={rating} />
        </div>
        <RoundButton theme={RoundButtonTheme.PRIMARY} className={cls.button}>
          <CartIcon />
        </RoundButton>
      </div>
    </div>
  );
};