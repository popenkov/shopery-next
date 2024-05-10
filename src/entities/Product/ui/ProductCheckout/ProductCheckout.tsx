import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import { TProduct } from 'entities/Product';
import { getFormattedPrice } from 'shared/lib/utils/getFormattedPrice';
import { Text } from 'shared/ui/Text';

import cls from './ProductCheckout.module.scss';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: Omit<TProduct, 'rating'>;
  className?: string;
}

export const ProductCheckout: FC<Props> = ({ data, className }) => {
  const { img, title, amount, path, price } = data;
  return (
    <div className={cn(cls.productCheckout, className)}>
      <div className={cls.productCheckoutInfo}>
        <div className={cls.productCheckoutPhoto}>
          <Image src={img} alt={title} fill />
        </div>
        <Link href={path}>
          <Text variant="body_s" as="h3">
            {title}
            <Text variant="body_s" as="span" className={cls.productCheckoutQuantity}>
              {' '}
              x{' '}
            </Text>
            <Text variant="body_s" as="span" className={cls.productCheckoutQuantity}>
              {amount}
            </Text>
          </Text>
        </Link>
      </div>
      <Text className={cls.productCheckoutPrice} variant="body_s">
        {getFormattedPrice(price)}
      </Text>
    </div>
  );
};
