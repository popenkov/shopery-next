import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import { TUserOrderItem } from '@/entities/User/model/types';
import { getFormattedPrice } from 'shared/lib/utils';
import { Text } from 'shared/ui/Text';

import cls from './ProductOrder.module.scss';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: TUserOrderItem;
  className?: string;
}

export const ProductOrder: FC<Props> = ({ data, className }) => {
  const { img, name, path, price, quantity, total } = data;
  return (
    <div className={cn(cls.ProductOrder, className)}>
      <div className={cls.ProductOrderInfo}>
        <div className={cls.ProductOrderPhoto}>
          <Image src={img} alt={name} fill />
        </div>
        <Link href={path}>
          <Text variant="body_m" weight="medium" as="h3">
            {name}
          </Text>
        </Link>
      </div>
      <div className={cls.ProductOrderPrice}>
        <Text variant="body_m" weight="medium" className={cls.ProductOrderPriceNew}>
          {getFormattedPrice(price)}
        </Text>
      </div>
      <Text variant="body_m" weight="medium" className={cls.ProductOrderQuantity}>
        x{quantity}
      </Text>
      <Text variant="body_m" weight="medium" className={cls.ProductOrderTotal}>
        {getFormattedPrice(total)}
      </Text>
    </div>
  );
};
