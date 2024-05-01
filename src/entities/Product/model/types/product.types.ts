import { TTag } from '@/shared/ui/Tag';

type StockVariant = 'not-available' | 'in-stock';

export type TProduct = {
    id: string;
    path: string;
    img: string;
    title: string;
    price: number;
    priceOld?: number;
    rating: number;
    tags?: TTag[];
    stock?: {
        type: StockVariant;
        text: string;
    };
};
