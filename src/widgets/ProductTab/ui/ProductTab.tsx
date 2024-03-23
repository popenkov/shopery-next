'use client';

import { ProductInterface } from '@/src/shared/interfaces/common';
import { MAIN_PAGE_DATA } from '@/src/shared/mock/mainPage';
import { ProductLarge, Tabs } from '@/src/shared/ui';
import { MobileSlider } from '@/src/shared/ui/MobileSlider';
import React from 'react';

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
