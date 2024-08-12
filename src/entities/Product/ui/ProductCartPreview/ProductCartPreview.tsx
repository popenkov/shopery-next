import { FC, ReactNode } from 'react';
import cn from 'classnames';

import { selectCurrentCurrency, DEFAULT_CURRENCY } from '@/entities/Currency';
import { useAppSelector } from '@/shared/lib/hooks';
import { getFormattedPrice } from '@/shared/lib/utils';
import { Text } from '@/shared/ui/Text';

import { type TProduct } from '../../model';

import cls from './ProductCartPreview.module.scss';

type Props = {
  data: TProduct;
  actions: ReactNode;
  className?: string;
};

export const ProductCartPreview: FC<Props> = ({ data, actions, className }) => {
  const currentCurrency = useAppSelector(selectCurrentCurrency) || DEFAULT_CURRENCY;
  const { img, title, path, price, amount } = data;
  return (
    <div className={cn(cls.ProductCartPreview, className)}>
      <img className={cls.ProductCartPreviewImage} src={img} alt={data.title} />
      <div className={cls.ProductCartPreviewDescription}>
        <a className={cls.ProductCartPreviewLink} href={path}>
          <Text variant="body_s" className={cls.ProductCartPreviewTitle}>
            {title}
          </Text>
        </a>
        <Text variant="body_s" className={cls.ProductCartPreviewAmount}>
          <span className={cls.ProductCartPreviewAmountValue}>{amount}</span>
          <span className={cls.ProductCartPreviewSeparator}>x</span>
          <span className={cls.ProductCartPreviewPriceValue}>
            {getFormattedPrice(price, currentCurrency)}
          </span>
        </Text>
      </div>
      {actions}
    </div>
  );
};
