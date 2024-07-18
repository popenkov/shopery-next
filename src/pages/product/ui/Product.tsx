import { FC } from 'react';
import cn from 'classnames';

import { getProductDetails } from '@/entities/Product';
import { AddToCartCounter } from '@/features/Cart';
import { AddToWishlist } from '@/features/Product';
import { AppRouteNames } from '@/shared/model';
import { Breadcrumbs } from '@/shared/ui/Breadcrumps';
import { ProductDescription } from '@/widgets/ProductDescription';
import { ProductDetailedTabs, RelatedProducts } from '@/widgets/ProductDetailed';

import cls from './Product.module.scss';

const Product: FC = () => {
  const data = getProductDetails();

  const crumbs = [AppRouteNames.HOME, AppRouteNames.CATALOG, data.title];

  return (
    <main data-testid="productPage" className={cn(cls.product, 'main')}>
      <Breadcrumbs items={crumbs} />
      <div className="product-page">
        <ProductDescription
          data={data}
          actions={
            <>
              <AddToCartCounter className={cls.ProductCartPreviewCounter} />
              <AddToWishlist className={cls.productFavoriteButton} item={data} />
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
    </main>
  );
};

export default Product;
