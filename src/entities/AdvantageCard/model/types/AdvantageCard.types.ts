type TAdvantageIcons =
    | 'icon__delivery_truck'
    | 'icon__headphones'
    | 'icon__shopping_bag'
    | 'icon__package';

export type TAdvantage = {
    id: string;
    icon: TAdvantageIcons;
    title: string;
    text: string;
    isHighlighted?: boolean;
};
