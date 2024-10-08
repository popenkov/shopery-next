'use client';

import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import { Product, TProduct } from '@/entities/Product';
import { AddToCart } from '@/features/Cart';
import { AddToWishlist, ShowProductPreview } from '@/features/Product';
import { MobileSlider } from '@/shared/ui/MobileSlider';

import cls from './RelatedProducts.module.scss';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
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
        <div className={cls.relatedProductsMobile}>
          <MobileSlider<TProduct>
            data={data}
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
