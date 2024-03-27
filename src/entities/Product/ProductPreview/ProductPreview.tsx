import Image from 'next/image';
import Link from 'next/link';
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import { RoundButton, StarRating, Text } from '@/shared';
import CartIcon from '@public/icons/icon__cart.svg';
import PreviewIcon from '@public/icons/icon__eye.svg';
import LikeIcon from '@public/icons/icon__heart.svg';

import cls from './ProductPreview.module.scss';
import { ProductInterface } from '../model/interfaces/product.interface';

interface ProductPreviewProps
  extends Omit<
      DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
      'title'
    >,
    ProductInterface {}

export const ProductPreview: FC<ProductPreviewProps> = (props) => {
  const { img, title, href, price, priceOld, rating } = props;

  return (
    <div className={cls.product}>
      <Link href={href} className={cls.imageLink}>
        <Image src={img} fill alt={title} className={cls.image} />
      </Link>
      <div className={cls.description}>
        <Link href={href} className={cls.link}>
          <Text
            text={title}
            // todo
            // variant={TextVariant.HEADING_4}
            className={cls.title}
          >
            {title}
          </Text>
        </Link>
        <div>
          <div className={cls.descriptionMain}>
            <div className={cls.price}>
              <Text
                text={price}
                // todo
                // size={TextVariant.BODY_M}
                // weight={TextWeight.MEDIUM}
              >
                {price}
              </Text>
              {priceOld && (
                <Text
                  text={price}
                  // todo
                  // size={TextVariant.BODY_M}
                  // weight={TextWeight.MEDIUM}
                  className={cls.priceOld}
                >
                  {priceOld}
                </Text>
              )}
            </div>
            <StarRating value={rating} />
          </div>
          <div className={cls.descriptionHover}>
            <div className={cls.buttons}>
              <RoundButton
              // todo
              // theme={RoundButtonTheme.PRIMARY}
              >
                <CartIcon />
              </RoundButton>
              <RoundButton
              // todo
              // theme={RoundButtonTheme.PRIMARYINVERSED}
              >
                <PreviewIcon />
              </RoundButton>
              <RoundButton
              // todo
              // theme={RoundButtonTheme.PRIMARYINVERSED}
              >
                <LikeIcon />
              </RoundButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
