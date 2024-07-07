'use client';

import { DetailedHTMLProps, FC, HTMLAttributes, useCallback, useState } from 'react';
import cn from 'classnames';

import { AddToWishlist } from '@/features/Product';
import { ShowProductPreview } from '@/features/Product/show-preview/ui';
import { AddToCart } from 'features/Cart/add-to-cart';
import { Filters } from 'features/Filter';
import { type TDiscountBanner, DiscountBanner } from 'entities/DiscountBanner';
import { ProductSmall, TProduct } from 'entities/Product';
import { FilterButton } from 'shared/ui/FilterButton';

import cls from './CatalogFilter.module.scss';
import { CatalogFilterFooter } from './CatalogFilterFooter';
import { CatalogFilterHeader } from './CatalogFilterHeader';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  banner: TDiscountBanner;
  featuredItems: TProduct[];
}

export const CatalogFilter: FC<Props> = ({ banner, featuredItems }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleFilterToggle = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleFilterClose = useCallback(() => {
    setIsFilterOpen(false);
  }, []);

  const handleFilterApply = () => {
    handleFilterToggle();
  };

  return (
    <div className={cls.filter}>
      <FilterButton onClick={handleFilterToggle} className={cls.filterButton} />

      <div
        className={cn(cls.filterMenuBackground, {
          [cls.opened]: isFilterOpen,
        })}
      >
        <div className={cls.filterMenu}>
          <CatalogFilterHeader handleClose={handleFilterClose} />

          <Filters className={cls.filter} />

          <DiscountBanner {...banner} className={cls.banner} />
          <div className={cls.products}>
            {featuredItems.map((item) => {
              return (
                <ProductSmall
                  data={item}
                  key={item.id}
                  actions={
                    <>
                      <AddToCart item={item} className={cls.button} />
                      <ShowProductPreview
                        item={item}
                        theme="secondary"
                        className={cls.imageButton}
                      />
                      <AddToWishlist className={cls.imageButton} item={item} theme="secondary" />
                    </>
                  }
                />
              );
            })}
          </div>

          <CatalogFilterFooter applyFilter={handleFilterApply} />
        </div>
      </div>
    </div>
  );
};
