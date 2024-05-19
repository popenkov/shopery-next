import { FC } from 'react';

import { ProductDescription } from 'widgets/ProductDescription';
import { ProductDetailedTabs, RelatedProducts } from 'widgets/ProductDetailed';
import { AppRouteNames } from '@/shared/model';
import { Breadcrumbs } from '@/shared/ui/Breadcrumps';
import { AddToCartCounter, AddToFavorites } from 'features/Product';
import { getProductDetails } from 'entities/Product';

import cls from './Product.module.scss';

const Product: FC = () => {
  const data = getProductDetails();

  const crumbs = [AppRouteNames.HOME, AppRouteNames.CATALOG, data.title];

  return (
    <div data-testid="productPage" className={cls.product}>
      <Breadcrumbs items={crumbs} />
      <div className="product-page">
        <ProductDescription
          data={data}
          actions={
            <>
              <AddToCartCounter className={cls.productCartCounter} />
              <AddToFavorites className={cls.productFavoriteButton} itemID={data.id} />
            </>
          }
        />

        <ProductDetailedTabs
          ad={data.ad}
          descriptions={data.descriptions}
          specs={data.specs}
          feedback={data.feedback}
        />

        <RelatedProducts data={data.relatedProducts} />
      </div>
    </div>
  );
};

export default Product;
