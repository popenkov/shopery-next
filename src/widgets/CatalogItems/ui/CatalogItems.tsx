import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import cn from 'classnames';

import { Product, ProductSmall, TProduct } from '@/entities/Product';
import { AddToCart } from '@/features/Cart';
import { ShowProductPreview, AddToWishlist } from '@/features/Product';
import { CardRevealingOnScroll } from '@/shared/lib/utils';

import cls from './CatalogItems.module.scss';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  products: TProduct[];
  className?: string;
}

export const CatalogItems: FC<Props> = ({ products, className }) => {
  return (
    <div className={cn(cls.catalogItems, className)}>
      <div className={cls.catalogDesktopWrapper}>
        {products.map((product) => {
          return (
            <CardRevealingOnScroll key={product.id}>
              <Product
                data={product}
                actions={
                  <>
                    <AddToWishlist className={cls.imageButton} item={product} theme="secondary" />
                    <ShowProductPreview
                      item={product}
                      theme="secondary"
                      className={cls.imageButton}
                    />
                  </>
                }
                cartAction={<AddToCart item={product} className={cls.button} />}
              />
            </CardRevealingOnScroll>
          );
        })}
      </div>
      <div className={cls.catalogMobileWrapper}>
        {products.map((product) => {
          return (
            <ProductSmall
              data={product}
              key={product.id}
              actions={
                <>
                  <AddToCart item={product} className={cls.button} />
                  <ShowProductPreview
                    item={product}
                    theme="secondary"
                    className={cls.imageButton}
                  />
                  <AddToWishlist className={cls.imageButton} item={product} theme="secondary" />
                </>
              }
            />
          );
        })}
      </div>
    </div>
  );
};
