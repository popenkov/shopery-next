'use client';
import { FC, useState } from 'react';

import { DiscountBanner } from '@/entities/DiscountBanner';
import { ProductSmall, TProduct } from '@/entities/Product';
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

// todo
const PAGE_SIZE = 10;

const Catalog: FC = () => {
  const crumbs: AppRouteNames[] = [AppRouteNames.HOME, AppRouteNames.CATALOG];
  const { banner, featuredItems } = getCatalogFilterData();
  const { items: allItems } = getCatalogItems();
  const [items, setItems] = useState<TProduct[]>(allItems);

  // todo
  // useEffect(() => {
  //   handlePageChange(1);
  // }, [allItems]);

  const handlePageChange = (filteredProducts: TProduct[]) => {
    console.log('handlePageChange', filteredProducts);

    // update your component state to display the current page cards
    setItems(filteredProducts);
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
          allItems={allItems}
          className={cls.pagination}
          pageSize={PAGE_SIZE}
          onPageChange={handlePageChange}
        />

        {/* <PaginationClient
          totalCount={items.length}
          pageSize={PAGE_SIZE}
          onPageChange={handlePageChange}
          className={cls.pagination}
        /> */}
      </div>
    </main>
  );
};

export default Catalog;
