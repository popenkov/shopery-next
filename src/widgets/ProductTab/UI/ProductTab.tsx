'use client';

import React from 'react';

import { MobileSlider } from '@/entities/MobileSlider';
import { ProductLarge } from '@/entities/Product';
import { ProductInterface } from '@/entities/Product/model/interfaces/product.interface';
import { Tabs } from '@/shared';
import { MAIN_PAGE_DATA } from '@/shared/mock/mainPage';

export const ProductTab = () => {
  const productTabs = MAIN_PAGE_DATA.productTabs;

  return (
    <div>
      <Tabs<ProductInterface>
        tabs={productTabs}
        tabContent={(item) => <ProductLarge {...item} />}
        sliderContent={(props) => (
          <MobileSlider<ProductInterface>
            {...props}
            render={(child: ProductInterface) => <ProductLarge {...child} />}
          />
        )}
      />
    </div>
  );
};
