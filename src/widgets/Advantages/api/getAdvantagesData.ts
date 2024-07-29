import { type TAdvantage } from '@/entities/Advantage';

const data: TAdvantage[] = [
  {
    id: 'DeliveryTruckIcon',
    icon: 'DeliveryTruckIcon',
    title: 'Free Shipping',
    text: 'Free shipping with discount',
    isHighlighted: true,
  },
  {
    id: 'HeadphonesIcon',
    icon: 'HeadphonesIcon',
    title: 'Great Support 24/7',
    text: 'Instant access to Contact ',
  },
  {
    id: 'ShoppingBagIcon',
    icon: 'ShoppingBagIcon',
    title: '100% Secure Payment',
    text: 'We ensure your money is save',
  },
  {
    id: 'PackageIcon',
    icon: 'PackageIcon',
    title: 'Money-Back Guarantee',
    text: '30 days money-back guarantee',
  },
];

export const getAdvantagesData = () => {
  return { advantages: data };
};
