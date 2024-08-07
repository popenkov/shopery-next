'use client';
import { FC } from 'react';

import { DiscountBanner } from '@/entities/DiscountBanner';
import { ProductSmall } from '@/entities/Product';
import { AddToCart } from '@/features/Cart/add-to-cart';
import { CatalogSort } from '@/features/CatalogSort';
import { AddToWishlist } from '@/features/Product';
import { ShowProductPreview } from '@/features/Product';
import { AppRouteNames } from '@/shared/model';
import { Breadcrumbs } from '@/shared/ui/Breadcrumps';
import { Pagination } from '@/shared/ui/Pagination';
import { CatalogFilter, getCatalogFilterData } from '@/widgets/CatalogFilter';
import { CatalogItems, getCatalogItems } from '@/widgets/CatalogItems';

import cls from './catalog.module.scss';

const Catalog: FC = () => {
  const crumbs: AppRouteNames[] = [AppRouteNames.HOME, AppRouteNames.CATALOG];
  const { banner, featuredItems } = getCatalogFilterData();
  const { items } = getCatalogItems();

  const handlePageChange = () => {
    console.log('handlePageChange');
  };
  return (
    <main className="main" data-testid="catalogPage">
      <Breadcrumbs items={crumbs} />
      <div className={cls.catalog}>
        <div className={cls.filter}>
          <CatalogFilter banner={banner} featuredItems={featuredItems} />
        </div>
        <div className={cls.sorting}>
          <CatalogSort />
        </div>
        <CatalogItems products={items} className={cls.items} />

        <DiscountBanner {...banner} className={cls.bannerMobile} />

        <div className={cls.saleProductsMobile}>
          {featuredItems.map((item) => {
            return (
              <ProductSmall
                data={item}
                key={item.id}
                actions={
                  <>
                    <AddToCart item={item} className={cls.button} />
                    <ShowProductPreview item={item} theme="secondary" className={cls.imageButton} />
                    <AddToWishlist className={cls.imageButton} item={item} theme="secondary" />
                  </>
                }
              />
            );
          })}
        </div>

        <Pagination
          onPageChange={handlePageChange}
          totalCount={20}
          currentPage={1}
          pageSize={10}
          className={cls.pagination}
        />
      </div>
    </main>
  );
};

export default Catalog;
