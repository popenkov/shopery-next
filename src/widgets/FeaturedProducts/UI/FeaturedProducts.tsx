'use client';

import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import { ProductInterface } from '@/entities/Product/model/interfaces/product.interface';

import { getFeaturedProducts } from '../api/getFeaturedProducts';
import { MobileSlider } from '@/entities/MobileSlider';
import { Product } from '@/entities/Product';

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const FeaturedProducts: FC<Props> = () => {
  const { products } = getFeaturedProducts();

  return (
    <div className="section">
      <h2 className="section__title container">Featured Products</h2>
      <div className="section__content--large">
        <div className="grid grid__five-items d-desktop container">
          {/*  продукты */}
          {products.map((item) => {
            return <Product data={item} key={item.id} />;
          })}
        </div>
        <div className="container mobile-slider d-mobile">
          <MobileSlider<ProductInterface>
            data={products}
            render={(child: ProductInterface) => <Product data={child} />}
          />
        </div>
      </div>
    </div>
  );
};