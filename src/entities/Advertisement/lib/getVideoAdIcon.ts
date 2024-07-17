import { LeafIcon, PriceTagIcon } from '@/shared/ui/icons';

const icons = {
  PriceTagIcon: PriceTagIcon,
  LeafIcon: LeafIcon,
};

export const getVideoAdIcon = (iconName: keyof typeof icons) => {
  return icons[iconName];
};
