'use client';

import {
    DetailedHTMLProps,
    FC,
    HTMLAttributes,
    ReactNode,
    useCallback,
    useState,
} from 'react';
import cn from 'classnames';

import cls from './CatalogFilter.module.scss';
import { Button, FilterButton } from '@/shared/UI';

import { ProductInterface, ProductSmall } from '@/entities/Product';
import { Filter } from '@/features/Filter';
import { DiscountBanner } from '@/entities/DiscountBanner/ui';
import { getCatalogFilterData } from '../api/getCatalogFilterData';

interface Props
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    banner?: ReactNode;
    saleProducts?: ProductInterface[];
    renderSaleProducts?: (product: ProductInterface) => ReactNode;
}

export const CatalogFilter: FC<Props> = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const { banner, featuredItems } = getCatalogFilterData();
    const handleFilterButtonClick = useCallback(() => {
        console.log('click');
        setIsFilterOpen(true);
    }, []);

    return (
        <div className={cls.filter}>
            <FilterButton
                onClick={handleFilterButtonClick}
                className={cls.filterButton}
            />

            <div className={cls.filterMenuBackground}>
                <div className={cls.filterMenu}>
                    {/* filter header*/}
                    <div className={cn(cls.header, 'd-mobile--flex')}>
                        <p className=".title">Filter</p>
                        <button className=".close-button js-filter-close-button">
                            <svg className=".close-icon">
                                <use href="img/svgSprite.svg#icon__close"></use>
                            </svg>
                        </button>
                    </div>

                    <Filter />

                    <DiscountBanner {...banner} />
                    <div>
                        {featuredItems.map((item) => {
                            return <ProductSmall data={item} key={item.id} />;
                        })}
                    </div>

                    <div className={cls.footer}>
                        <Button size="large" className={cls.button}>
                            Apply filter
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
