'use client';

import { ProductInterface } from '@/src/shared/interfaces/common';
import { MAIN_PAGE_DATA } from '@/src/shared/mock/mainPage';
import { ProductLarge, ProductSlider, Tabs } from '@/src/shared/ui';
import React from 'react';

export const ProductTab = () => {
  const productTabs = MAIN_PAGE_DATA.productTabs;
  return (
    <div>
      <Tabs<ProductInterface>
        tabs={productTabs}
        tabContent={(item) => <ProductLarge {...item} />}
        sliderContent={(props) => <ProductSlider {...props} />}
      />
    </div>
  );
};
