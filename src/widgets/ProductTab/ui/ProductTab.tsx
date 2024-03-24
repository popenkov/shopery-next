'use client';

import React from 'react';

import { MobileSlider } from '@/entities/UI/MobileSlider';
import { ProductInterface } from '@/shared/interfaces/common';
import { MAIN_PAGE_DATA } from '@/shared/mock/mainPage';
import { ProductLarge, Tabs } from '@/shared/ui';

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
