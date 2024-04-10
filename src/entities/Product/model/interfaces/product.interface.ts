import { TTag } from '@/shared/UI/Tag';

export type ProductInterface = {
    id: string;
    path: string;
    img: string;
    title: string;
    price: number;
    priceOld?: number;
    rating: number;
    tags?: TTag[];
};
