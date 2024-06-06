type THeaderIcon =
  | 'AppleIcon'
  | 'SaladIcon'
  | 'FishIcon'
  | 'CoffeeIcon'
  | 'IceCreamIcon'
  | 'CupcakeIcon'
  | 'PieIcon'
  | 'FoodIcon';

export type HeaderCategory = {
  path: string;
  icon: THeaderIcon;
  title: string;
};
