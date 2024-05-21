'use client';

import React, { FC } from 'react';

import { AddToFavorites } from '@/features/Product';
import { AddToCart } from 'features/Cart/add-to-cart';
import { ShowProductPreview } from '@/features/Product/show-preview/ui';
import { ProductLarge, TProduct } from 'entities/Product';
import { MobileSlider } from 'shared/ui/MobileSlider';
import { ProductTabs } from 'shared/ui/ProductTabs';
import { Text } from 'shared/ui/Text';

import { getProductTab } from '../api';

import cls from './ProductTab.module.scss';

export const ProductTab: FC = () => {
  const { productTabs } = getProductTab();

  // todo
  // const products = await fetch(`http://localhost:6868/api/products`);

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
                <AddToFavorites className={cls.imageButton} item={item} theme="secondary" />
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
                    <AddToFavorites
                      className={cls.imageButton}
                      itemID={child.id}
                      theme="secondary"
                    />
                    <ShowProductPreview
                      itemID={child.id}
                      theme="secondary"
                      className={cls.imageButton}
                    />
                  </>
                }
                cartAction={<AddToCart itemID={child.id} className={cls.button} />}
              />
            )}
          />
        )}
      />
    </div>
  );
};
