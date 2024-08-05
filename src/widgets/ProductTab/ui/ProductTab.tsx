'use client';

import { FC } from 'react';

import { ProductLarge, TProduct } from '@/entities/Product';
import { AddToCart } from '@/features/Cart/add-to-cart';
import { AddToWishlist } from '@/features/Product';
import { ShowProductPreview } from '@/features/Product';
import { MobileSlider } from '@/shared/ui/MobileSlider';
import { ProductTabs } from '@/shared/ui/ProductTabs';
import { Text } from '@/shared/ui/Text';

import { getProductTab } from '../api';

import cls from './ProductTab.module.scss';

export const ProductTab: FC = () => {
  const { productTabs } = getProductTab();

  return (
    <div className={cls.productTab}>
      <Text variant="heading_3" weight="semibold" align="center" className={cls.productTabTitle}>
        Introducing Our Products
      </Text>

      <ProductTabs<TProduct>
        tabs={productTabs}
        tabContent={(item) => (
          <ProductLarge
            data={item}
            key={item.id}
            actions={
              <>
                <AddToWishlist className={cls.imageButton} item={item} theme="secondary" />
                <ShowProductPreview item={item} theme="secondary" className={cls.imageButton} />
              </>
            }
            cartAction={<AddToCart item={item} className={cls.button} />}
          />
        )}
        sliderContent={(props) => (
          <MobileSlider<TProduct>
            {...props}
            render={(child: TProduct) => (
              <ProductLarge
                data={child}
                key={child.id}
                actions={
                  <>
                    <AddToWishlist className={cls.imageButton} item={child} theme="secondary" />
                    <ShowProductPreview
                      item={child}
                      theme="secondary"
                      className={cls.imageButton}
                    />
                  </>
                }
                cartAction={<AddToCart item={child} className={cls.button} />}
              />
            )}
          />
        )}
      />
    </div>
  );
};
