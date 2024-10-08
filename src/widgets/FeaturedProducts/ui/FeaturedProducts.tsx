'use client';

import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import { Product, TProduct } from '@/entities/Product';
import { AddToCart } from '@/features/Cart';
import { AddToWishlist, ShowProductPreview } from '@/features/Product';
import { MobileSlider } from '@/shared/ui/MobileSlider';

import { getFeaturedProducts } from '../api';

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
            return (
              <Product
                data={item}
                key={item.id}
                actions={
                  <>
                    <AddToWishlist className={cls.imageButton} item={item} theme="secondary" />
                    <ShowProductPreview item={item} theme="secondary" className={cls.imageButton} />
                  </>
                }
                cartAction={<AddToCart item={item} className={cls.button} />}
              />
            );
          })}
        </div>
        <div className={cls.featuredProductsMobile}>
          <MobileSlider<TProduct>
            data={products}
            render={(child: TProduct) => (
              <Product
                data={child}
                actions={
                  <>
                    <AddToWishlist className={cls.imageButton} item={child} theme="secondary" />
                    <ShowProductPreview
                      item={child}
                      theme="secondary"
                      className={cls.imageButton}
                    />
                  </>
                }
                cartAction={<AddToCart item={child} className={cls.button} />}
              />
            )}
          />
        </div>
      </div>
    </div>
  );
};
