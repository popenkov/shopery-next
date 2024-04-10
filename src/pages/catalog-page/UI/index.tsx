import { FC } from 'react';
import cn from 'classnames';

import { Breadcrumbs } from '@/entities/Breadcrumps';
import { AppRouteNames } from '@/shared/interfaces/router';
import cls from './catalog.module.scss';
import { CatalogSort } from '@/features/CatalogSort';
import { CatalogFilter } from '@/features/CatalogFilter';

export const Catalog: FC = () => {
    const crumbs: AppRouteNames[] = [AppRouteNames.HOME, AppRouteNames.CATALOG];
    return (
        <>
            <Breadcrumbs items={crumbs} />
            <div className={cn(cls.catalog, 'container')}>
                <div className={cls.filter}>
                    <CatalogFilter />
                </div>
                <div className={cls.sorting}>
                    <CatalogSort />
                </div>
                <div className={cls.items}></div>
                <div className={cls.banner}></div>
                <div className={cls.saleProducts}></div>
            </div>
        </>
    );
};
