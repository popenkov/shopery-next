import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import { getFormattedPrice } from '@/shared/lib/utils';
import { Tag } from '@/shared/ui/Tag';
import { Text } from '@/shared/ui/Text';

import { type TProduct } from '../../';

import cls from './ProductWishlist.module.scss';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: Omit<TProduct, 'rating'>;
  actions?: ReactNode;
  className?: string;
}

export const ProductWishlist: FC<Props> = ({ data, className, actions }) => {
  const { img, title, path, price, priceOld, stock } = data;
  return (
    <div className={cn(cls.productWishlist, className)}>
      <div className={cls.productWishlistInfo}>
        <div className={cls.productWishlistPhoto}>
          <Image src={img} alt={title} fill />
        </div>
        <Link href={path}>
          <Text variant="body_m" weight="medium" as="h3">
            {title}
          </Text>
        </Link>
      </div>
      <div className={cls.productWishlistPrice}>
        <Text variant="body_m" weight="medium" className={cls.productWishlistPriceNew}>
          {getFormattedPrice(price)}
        </Text>
        {priceOld && (
          <Text variant="body_m" weight="medium" className={cls.productWishlistPriceOld}>
            {getFormattedPrice(priceOld)}
          </Text>
        )}
      </div>
      {stock && (
        <Tag variant={stock.type} className={cls.productWishlistStock}>
          {stock.text}
        </Tag>
      )}
      <div className={cls.productWishlistActions}>{actions}</div>
    </div>
  );
};
