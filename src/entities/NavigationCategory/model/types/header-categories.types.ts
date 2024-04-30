type THeaderIcon =
    | 'icon__apple'
    | 'icon__salad'
    | 'icon__fish'
    | 'icon__coffee'
    | 'icon__ice_cream'
    | 'icon__cupcake'
    | 'icon__pie'
    | 'icon__food';

export type HeaderCategory = {
    path: string;
    icon: THeaderIcon;
    title: string;
};
