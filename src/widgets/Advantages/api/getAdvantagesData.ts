import { nanoid } from 'nanoid';

import { TAdvantage } from '@/entities/AdvantageCard';

const data: TAdvantage[] = [
  {
    id: nanoid(),
    icon: 'icon__delivery_truck',
    title: 'Free Shipping',
    text: 'Free shipping with discount',
    isHighlighted: true,
  },
  {
    id: nanoid(),
    icon: 'icon__headphones',
    title: 'Great Support 24/7',
    text: 'Instant access to Contact ',
  },
  {
    id: nanoid(),
    icon: 'icon__shopping_bag',
    title: '100% Secure Payment',
    text: 'We ensure your money is save',
  },
  {
    id: nanoid(),
    icon: 'icon__package',
    title: 'Money-Back Guarantee',
    text: '30 days money-back guarantee',
  },
];

export const getAdvantagesData = () => {
  return { advantages: data };
};
