import { DiscountBanner } from '@/entities/DiscountBanner/ui';
import { Filter } from '@/features/Filter';
import React from 'react';
import { getCatalogFilterData } from '../api/getCatalogFilterData';
import { ProductSmall } from '@/entities/Product';

export const CatalogFilter = () => {
    const { banner, featuredItems } = getCatalogFilterData();
    return (
        <div>
            <Filter />
            <DiscountBanner {...banner} />
            <div>
                {featuredItems.map((item) => {
                    return <ProductSmall data={item} key={item.id} />;
                })}
            </div>
        </div>
    );
};
