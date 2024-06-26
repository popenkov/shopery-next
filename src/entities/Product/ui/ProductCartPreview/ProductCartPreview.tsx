import { FC, ReactNode } from 'react';
import cn from 'classnames';

import { TProduct } from '../../model';

import cls from './ProductCartPreview.module.scss';

type Props = {
  data: TProduct;
  actions: ReactNode;
  className?: string;
};

export const ProductCartPreview: FC<Props> = ({ data, actions, className }) => {
  const { img, title, path, price, amount } = data;
  return (
    <div className={cn(cls.ProductCartPreview, className)}>
      <img className={cls.ProductCartPreviewImage} src={img} alt={data.title} />
      <div className={cls.ProductCartPreviewDescription}>
        <a className={cls.ProductCartPreviewLink} href={path}>
          <h3 className={cls.ProductCartPreviewTitle}>{title}</h3>
        </a>
        <p className={cls.ProductCartPreviewAmount}>
          {/* todo взять из корзины */}
          <span className={cls.ProductCartPreviewAmountValue}>{amount}</span>
          <span className={cls.ProductCartPreviewSeparator}>x</span>
          <span className={cls.ProductCartPreviewPriceValue}>{price}</span>
        </p>
      </div>
      {actions}
    </div>
  );
};
