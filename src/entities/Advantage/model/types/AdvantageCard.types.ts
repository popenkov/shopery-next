type TAdvantageIcons = 'DeliveryTruckIcon' | 'HeadphonesIcon' | 'ShoppingBagIcon' | 'PackageIcon';

export type TAdvantage = {
  id: string;
  icon: TAdvantageIcons;
  title: string;
  text: string;
  isHighlighted?: boolean;
};
