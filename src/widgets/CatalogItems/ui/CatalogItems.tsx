import { Product, ProductSmall, TProduct } from '@/entities/Product';
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import cn from 'classnames';
import cls from './CatalogItems.module.scss';

interface Props
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    products: TProduct[];
    className?: string;
}

export const CatalogItems: FC<Props> = ({ products, className }) => {
    return (
        <div className={cn(cls.catalogItems, className)}>
            <div className={cls.catalogDesktopWrapper}>
                {products.map((product) => {
                    return <Product data={product} key={product.id} />;
                })}
            </div>
            <div className={cls.catalogMobileWrapper}>
                {products.map((product) => {
                    return <ProductSmall data={product} key={product.id} />;
                })}
            </div>
        </div>
    );
};
