import { TTag } from '@/shared/ui/Tag';

export type TProduct = {
    id: string;
    path: string;
    img: string;
    title: string;
    price: number;
    priceOld?: number;
    rating: number;
    tags?: TTag[];
};
