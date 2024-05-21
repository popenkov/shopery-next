'use client';
import { FC } from 'react';

import { CatalogFilter, getCatalogFilterData } from 'widgets/CatalogFilter';
import { CatalogItems, getCatalogItems } from 'widgets/CatalogItems';
import { AppRouteNames } from '@/shared/model';
import { Breadcrumbs } from '@/shared/ui/Breadcrumps';
import { CatalogSort } from 'features/CatalogSort';
import { AddToFavorites } from 'features/Product';
import { AddToCart } from 'features/Cart/add-to-cart';
import { ShowProductPreview } from 'features/Product/show-preview/ui';
import { DiscountBanner } from 'entities/DiscountBanner';
import { ProductSmall } from 'entities/Product';
import { Pagination } from 'shared/ui/Pagination';

import cls from './catalog.module.scss';

const Catalog: FC = () => {
  const crumbs: AppRouteNames[] = [AppRouteNames.HOME, AppRouteNames.CATALOG];
  const { banner, featuredItems } = getCatalogFilterData();
  const { items } = getCatalogItems();

  const handlePageChange = () => {
    console.log('handlePageChange');
  };
  return (
    <div data-testid="mainPage">
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
                    <AddToCart itemID={item.id} className={cls.button} />
                    <ShowProductPreview
                      itemID={item.id}
                      theme="secondary"
                      className={cls.imageButton}
                    />
                    <AddToFavorites
                      className={cls.imageButton}
                      itemID={item.id}
                      theme="secondary"
                    />
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
    </div>
  );
};

export default Catalog;
