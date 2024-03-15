import { ProductInterface } from '@/src/shared/interfaces/common';
import Image from 'next/image';
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import cls from './Product.module.scss';
import Link from 'next/link';
import {
  RoundButton,
  RoundButtonTheme,
  StarRating,
  Text,
  TextSize,
  TextWeight,
} from '../..';
import CartIcon from '../../../../../public/icons/icon__cart.svg';
import PreviewIcon from '../../../../../public/icons/icon__eye.svg';
import LikeIcon from '../../../../../public/icons/icon__heart-lined.svg';

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
          <Link className={cls.link} href="#">
            <Text text={title} size={TextSize.S} className={cls.title} />
          </Link>
          <div className={cls.price}>
            <Text text={price} size={TextSize.M} weight={TextWeight.MEDIUM} />
            {priceOld && (
              <Text
                text={price}
                size={TextSize.M}
                weight={TextWeight.MEDIUM}
                className={cls.priceOld}
              />
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
