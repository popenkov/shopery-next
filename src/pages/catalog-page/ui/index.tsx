'use client';
import { FC } from 'react';

import cn from 'classnames';

import { Breadcrumbs } from '@/entities/Breadcrumps';
import { DiscountBanner } from '@/entities/DiscountBanner/ui';
import { ProductSmall } from '@/entities/Product';
import { CatalogSort } from '@/features/CatalogSort';
import { AppRouteNames } from '@/shared/interfaces/router';
import { Pagination } from '@/shared/ui';
import { CatalogFilter } from '@/widgets/CatalogFilter';
import { getCatalogFilterData } from '@/widgets/CatalogFilter/api/getCatalogFilterData';
import { CatalogItems } from '@/widgets/CatalogItems';
import { getCatalogItems } from '@/widgets/CatalogItems/api/getCatalogItems';

import cls from './catalog.module.scss';

export const Catalog: FC = () => {
    const crumbs: AppRouteNames[] = [AppRouteNames.HOME, AppRouteNames.CATALOG];
    const { banner, featuredItems } = getCatalogFilterData();
    const { items } = getCatalogItems();

    const handlePageChange = () => {
        console.log('handlePageChange');
    };
    return (
        <>
            <Breadcrumbs items={crumbs} />
            <div className={cn(cls.catalog, 'container')}>
                <div className={cls.filter}>
                    <CatalogFilter
                        banner={banner}
                        featuredItems={featuredItems}
                    />
                </div>
                <div className={cls.sorting}>
                    <CatalogSort />
                </div>
                <CatalogItems products={items} className={cls.items} />

                <DiscountBanner {...banner} className={cls.bannerMobile} />

                <div className={cls.saleProductsMobile}>
                    {featuredItems.map((item) => {
                        return <ProductSmall data={item} key={item.id} />;
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
        </>
    );
};
