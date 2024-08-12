import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { selectCurrentCurrency, DEFAULT_CURRENCY } from '@/entities/Currency';
import { useAppSelector } from '@/shared/lib/hooks';
import { getFormattedPrice } from '@/shared/lib/utils';
import { StarRating } from '@/shared/ui/StarRating';
import { Text } from '@/shared/ui/Text';

import { type TProduct } from '../..';

import cls from './ProductSmall.module.scss';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: TProduct;
  actions: ReactNode;
}

export const ProductSmall: FC<Props> = ({ data, actions }) => {
  const { img, title, path, price, priceOld, rating } = data;
  const currentCurrency = useAppSelector(selectCurrentCurrency) || DEFAULT_CURRENCY;
  return (
    <div className={cls.productSmall}>
      <Link className={cls.productImageLink} href={path!}>
        <Image className={cls.productImage} src={img!} alt={title} fill />
      </Link>
      <div className={cls.productDescription}>
        <Link className={cls.link} href={path!}>
          <Text variant="body_s" className={cls.productTitle}>
            {title}
          </Text>
        </Link>
        <div>
          <div className={cls.productDescriptionMain}>
            <Text variant="body_m" weight="medium" className={cls.productPrice}>
              <span>{getFormattedPrice(price, currentCurrency)}</span>
              {priceOld && (
                <span className={cls.productPriceOld}>
                  {getFormattedPrice(priceOld, currentCurrency)}
                </span>
              )}
            </Text>
            <div className={cls.productRating}>{rating && <StarRating value={rating} />}</div>
          </div>
          <div className={cls.productDescriptionHover}>
            <div className={cls.productActions}>{actions}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
