import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import cn from 'classnames';

import { AddToFavorites } from '@/features/Product';
import { ShowProductPreview } from '@/features/Product/show-preview/ui';
import { AddToCart } from 'features/Cart/add-to-cart';
import { Product, ProductSmall, TProduct } from 'entities/Product';

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
            <Product
              data={product}
              key={product.id}
              actions={
                <>
                  <AddToFavorites className={cls.imageButton} item={product} theme="secondary" />
                  <ShowProductPreview
                    item={product}
                    theme="secondary"
                    className={cls.imageButton}
                  />
                </>
              }
              cartAction={<AddToCart item={product} className={cls.button} />}
            />
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
                  <AddToFavorites className={cls.imageButton} item={product} theme="secondary" />
                </>
              }
            />
          );
        })}
      </div>
    </div>
  );
};
