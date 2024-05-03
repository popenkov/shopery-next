'use client';

import React, { FC } from 'react';

import { MobileSlider } from '@/shared/ui/MobileSlider/MobileSlider';
import { ProductLarge, TProduct } from '@/entities/Product';

import { getProductTab } from '../api/getProductTabs';
import { Text } from '@/shared/ui/Text';
import { ProductTabs } from '@/shared/ui/ProductTabs';

import cls from './ProductTab.module.scss';

export const ProductTab: FC = async () => {
    const { productTabs } = getProductTab();

    // todo
    // const products = await fetch(`http://localhost:6868/api/products`);

    return (
        <div className={cls.productTab}>
            <Text
                variant="heading_3"
                weight="semibold"
                align="center"
                className={cls.productTabTitle}
            >
                Introducing Our Products
            </Text>

            <ProductTabs<TProduct>
                tabs={productTabs}
                tabContent={(item) => (
                    <ProductLarge data={item} key={item.id} />
                )}
                sliderContent={(props) => (
                    <MobileSlider<TProduct>
                        {...props}
                        render={(child: TProduct) => (
                            <ProductLarge data={child} key={child.id} />
                        )}
                    />
                )}
            />
        </div>
    );
};
