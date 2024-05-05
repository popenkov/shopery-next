'use client';

import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import { Product, TProduct } from 'entities/Product';
import { MobileSlider } from 'shared/ui/MobileSlider/MobileSlider';

import { getFeaturedProducts } from '../api/getFeaturedProducts';

import cls from './FeaturedProducts.module.scss';































































interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const FeaturedProducts: FC<Props> = () => {
  const { products } = getFeaturedProducts();

  return (
    <div className={cls.featuredProducts}>
      <h2 className={cls.featuredProductsTitle}>Featured Products</h2>
      <div className={cls.featuredProductsContent}>
        <div className={cls.featuredProductsDesktop}>
          {/*  продукты */}
          {products.map((item) => {
            return <Product data={item} key={item.id} />;
          })}
        </div>
        <div className={cls.featuredProductsMobile}>
          <MobileSlider<TProduct>
            data={products}
            render={(child: TProduct) => <Product data={child} />}
          />
        </div>
      </div>
    </div>
  );
};
