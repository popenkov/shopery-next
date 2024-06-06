import { DeliveryTruckIcon, HeadphonesIcon, PackageIcon, ShoppingBagIcon } from 'shared/ui/icons';

const advantageIcons = {
  DeliveryTruckIcon: DeliveryTruckIcon,
  HeadphonesIcon: HeadphonesIcon,
  ShoppingBagIcon: ShoppingBagIcon,
  PackageIcon: PackageIcon,
};

export const getAdvantageIcon = (iconName: keyof typeof advantageIcons) => {
  return advantageIcons[iconName];
};
