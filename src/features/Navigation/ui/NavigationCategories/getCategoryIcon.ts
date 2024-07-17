import {
  AppleIcon,
  CoffeeIcon,
  CupcakeIcon,
  FishIcon,
  FoodIcon,
  IceCreamIcon,
  PieIcon,
  SaladIcon,
} from '@/shared/ui/icons';

const categoryIcons = {
  AppleIcon: AppleIcon,
  SaladIcon: SaladIcon,
  FishIcon: FishIcon,
  CoffeeIcon: CoffeeIcon,
  IceCreamIcon: IceCreamIcon,
  CupcakeIcon: CupcakeIcon,
  PieIcon: PieIcon,
  FoodIcon: FoodIcon,
};

export const getCategoryIcon = (iconName: keyof typeof categoryIcons) => {
  return categoryIcons[iconName];
};
