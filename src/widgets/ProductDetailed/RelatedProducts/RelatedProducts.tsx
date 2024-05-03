'use client';

import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import { MobileSlider } from '@/shared/ui/MobileSlider/MobileSlider';
import { Product, TProduct } from '@/entities/Product';

import cls from './RelatedProducts.module.scss';

interface Props
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    data: TProduct[];
}

export const RelatedProducts: FC<Props> = ({ data }) => {
    return (
        <div className={cls.relatedProducts}>
            <h2 className={cls.relatedProductsTitle}>Related Products</h2>
            <div className={cls.relatedProductsContent}>
                <div className={cls.relatedProductsDesktop}>
                    {/*  продукты */}
                    {data.map((item) => {
                        return <Product data={item} key={item.id} />;
                    })}
                </div>
                <div className={cls.relatedProductsMobile}>
                    <MobileSlider<TProduct>
                        data={data}
                        render={(child: TProduct) => <Product data={child} />}
                    />
                </div>
            </div>
        </div>
    );
};
