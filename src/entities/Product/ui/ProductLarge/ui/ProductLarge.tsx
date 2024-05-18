import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// todo перенести превью и корзину в фичи и экшны
import { TProduct } from 'entities/Product';
import { getFormattedPrice } from 'shared/lib/utils';
import { StarRating } from 'shared/ui/StarRating';
import { Text } from 'shared/ui/Text';

import cls from './ProductLarge.module.scss';

interface ProductLargeProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: TProduct;
  actions: ReactNode;
  cartAction: ReactNode;
}

export const ProductLarge: FC<ProductLargeProps> = ({ data, actions, cartAction }) => {
  const { img, title, path, price, priceOld, rating } = data;

  return (
    <div className={cls.product}>
      <div className={cls.imageContainer}>
        <div className={cls.buttons}>{actions}</div>
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
        {cartAction}
      </div>
    </div>
  );
};
