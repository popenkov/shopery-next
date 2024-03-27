'use client';

import React from 'react';

import { MobileSlider } from '@/entities/MobileSlider';
import { ProductLarge } from '@/entities/Product';
import { ProductInterface } from '@/entities/Product/model/interfaces/product.interface';
import { Tabs } from '@/shared';

import { getProductTab } from '../api/getProductTabs';

export const ProductTab = () => {
  const { productTabs } = getProductTab();

  return (
    <div>
      <Tabs<ProductInterface>
        tabs={productTabs}
        tabContent={(item) => <ProductLarge data={item} />}
        sliderContent={(props) => (
          <MobileSlider<ProductInterface>
            {...props}
            render={(child: ProductInterface) => <ProductLarge data={child} />}
          />
        )}
      />
    </div>
  );
};
