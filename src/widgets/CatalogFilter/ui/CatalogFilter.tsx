'use client';

import {
    DetailedHTMLProps,
    FC,
    HTMLAttributes,
    useCallback,
    useState,
} from 'react';
import cn from 'classnames';

import cls from './CatalogFilter.module.scss';
import { FilterButton } from '@/shared/UI';

import { ProductSmall, TProduct } from '@/entities/Product';
import { Filter } from '@/features/Filter';
import { DiscountBanner } from '@/entities/DiscountBanner/ui';
import { CatalogFilterHeader } from './CatalogFilterHeader/CatalogFilterHeader';
import { CatalogFilterFooter } from './CatalogFilterFooter';
import { TDiscountBanner } from '@/entities/DiscountBanner/model/banner';

interface Props
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
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
            <FilterButton
                onClick={handleFilterToggle}
                className={cls.filterButton}
            />

            <div
                className={cn(cls.filterMenuBackground, {
                    [cls.opened]: isFilterOpen,
                })}
            >
                <div className={cls.filterMenu}>
                    <CatalogFilterHeader handleClose={handleFilterClose} />

                    <Filter className={cls.filter} />

                    <DiscountBanner {...banner} className={cls.banner} />
                    <div className={cls.products}>
                        {featuredItems.map((item) => {
                            return <ProductSmall data={item} key={item.id} />;
                        })}
                    </div>

                    <CatalogFilterFooter applyFilter={handleFilterApply} />
                </div>
            </div>
        </div>
    );
};
