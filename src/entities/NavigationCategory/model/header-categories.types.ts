type THeaderIcon =
  | 'AppleIcon'
  | 'SaladIcon'
  | 'FishIcon'
  | 'CoffeeIcon'
  | 'IceCreamIcon'
  | 'CupcakeIcon'
  | 'PieIcon'
  | 'FoodIcon';

export type THeaderCategory = {
  path: string;
  icon: THeaderIcon;
  title: string;
};
