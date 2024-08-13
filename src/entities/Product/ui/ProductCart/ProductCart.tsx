import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import { selectCurrentCurrency } from '@/entities/Currency';
import { useAppSelector } from '@/shared/lib/hooks';
import { getFormattedPrice } from '@/shared/lib/utils';
import { Text } from '@/shared/ui/Text';

import { type TProduct } from '../..';

import cls from './ProductCart.module.scss';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: Omit<TProduct, 'rating'>;
  cartActions?: ReactNode;
  deleteActions?: ReactNode;
  className?: string;
}

export const ProductCart: FC<Props> = ({ data, className, cartActions, deleteActions }) => {
  const currentCurrency = useAppSelector(selectCurrentCurrency);
  const { img, title, path, price } = data;

  return (
    <div className={cn(cls.ProductCart, className)}>
      <div className={cls.ProductCartInfo}>
        <div className={cls.ProductCartPhoto}>
          <Image src={img!} alt={title} fill />
        </div>
        <Link href={path!}>
          <Text variant="body_m" weight="medium" as="h3">
            {title}
          </Text>
        </Link>
      </div>

      <div className={cls.ProductCartPrice}>
        <span className={cls.ProductCartKeyMobile}>Price:</span>
        <Text variant="body_m" weight="medium" className={cls.ProductCartPriceNew}>
          {getFormattedPrice(price, currentCurrency)}
        </Text>
      </div>
      <div className="cart-item__quantity">
        <span className={cls.ProductCartKeyMobileAmount}>Quantity:</span>
        <div className={cls.ProductCartActions}>{cartActions}</div>
      </div>
      <div className={cls.ProductCartSubtotal}>
        <span className={cls.ProductCartKeyMobile}>Subtotal:</span>
        <span className="cart-item__price-new">
          {getFormattedPrice(price[currentCurrency], currentCurrency)}
        </span>
      </div>
      <div className={cls.ProductCartDeleteButton}>{deleteActions}</div>
    </div>
  );
};
