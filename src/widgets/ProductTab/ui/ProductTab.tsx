'use client';

import React, { FC } from 'react';

import { MobileSlider } from '@/entities/MobileSlider';
import { ProductLarge, TProduct } from '@/entities/Product';

import { getProductTab } from '../api/getProductTabs';
import { Text } from '@/shared/ui/Text';
import { Tabs } from '@/shared/ui/Tabs';

import cls from './ProductTab.module.scss';

export const ProductTab: FC = () => {
    const { productTabs } = getProductTab();

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

            <Tabs<TProduct>
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
