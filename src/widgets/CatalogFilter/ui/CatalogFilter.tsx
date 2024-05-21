'use client';

import { DetailedHTMLProps, FC, HTMLAttributes, useCallback, useState } from 'react';
import cn from 'classnames';

import { AddToFavorites } from '@/features/Product';
import { AddToCart } from 'features/Cart/add-to-cart';
import { ShowProductPreview } from '@/features/Product/show-preview/ui';
import { Filters } from 'features/Filter';
import { TDiscountBanner, DiscountBanner } from 'entities/DiscountBanner';
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

          <CatalogFilterFooter applyFilter={handleFilterApply} />
        </div>
      </div>
    </div>
  );
};
