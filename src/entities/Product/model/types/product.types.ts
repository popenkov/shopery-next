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

type TAdIcons = 'icon__price_tag' | 'icon__leaf';

type SpecType = {
    title: string;
    value: { title: string; path: string }[];
};

type TReview = {
    id: string;
    text: string;
    photo: string;
    name: string;
    role: string;
};

export type TProductDetailed = {
    id: string;
    title: string;
    price: number;
    priceOld?: number;
    rating: number;
    tags?: TTag[];
    stock?: {
        type: StockVariant;
        text: string;
    };
    sliderImages: {
        thumb: string[];
        main: string[];
    };
    descriptions: string;
    specs: SpecType[];
    feedback: TReview[];
    ad: {
        video: {
            background: string;
            src: string;
        };
        advantages: {
            icon: TAdIcons;
            title: string;
            text: string;
        }[];
    };
    relatedProducts: TProduct[];
};
