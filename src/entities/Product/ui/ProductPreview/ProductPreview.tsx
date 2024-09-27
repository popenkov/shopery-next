import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { selectCurrentCurrency } from '@/entities/Currency';
import { useAppSelector } from '@/shared/lib/hooks';
import { getFormattedPrice } from '@/shared/lib/utils';
import { StarRating } from '@/shared/ui/StarRating';
import { Text } from '@/shared/ui/Text';

import { type TProduct } from '../../';

import cls from './ProductPreview.module.scss';

interface ProductPreviewProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: TProduct;
  actions: ReactNode;
}

export const ProductPreview: FC<ProductPreviewProps> = ({ data, actions }) => {
  const currentCurrency = useAppSelector(selectCurrentCurrency);
  const { img, title, path, price, priceOld, rating } = data;

  return (
    <div className={cls.product}>
      <Link href={`/products/${path}`} className={cls.imageLink}>
        <Image src={img!} fill alt={title} className={cls.image} />
      </Link>
      <div className={cls.description}>
        <Link href={`/products/${path}`} className={cls.link}>
          <Text variant="heading_4" className={cls.title}>
            {title}
          </Text>
        </Link>
        <div>
          <div className={cls.descriptionMain}>
            <div className={cls.price}>
              <Text variant="body_m" weight="medium">
                {getFormattedPrice(price, currentCurrency)}
              </Text>
              {priceOld && (
                <Text variant="body_m" weight="medium" className={cls.priceOld}>
                  {getFormattedPrice(priceOld, currentCurrency)}
                </Text>
              )}
            </div>
            {rating && <StarRating value={rating} />}
          </div>
          <div className={cls.descriptionHover}>
            <div className={cls.buttons}>{actions}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
