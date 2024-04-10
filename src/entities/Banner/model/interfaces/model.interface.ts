enum BannerVariant {
    LEFT = 'left',
    RIGHT = 'right',
    WHITE = 'white',
}

export type TBanner = {
    id: string;
    variant: `${BannerVariant}`[];
    background: string;
    subtitle: string;
    price: string;
    title?: string;
    text?: string;
    textPosition?: 'left' | 'right';
};
