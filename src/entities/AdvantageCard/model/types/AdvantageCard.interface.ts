export type TAdvantage = {
    id: string;
    icon:
        | 'icon__delivery_truck'
        | 'icon__headphones'
        | 'icon__shopping_bag'
        | 'icon__package';
    title: string;
    text: string;
    isHighlighted?: boolean;
};
