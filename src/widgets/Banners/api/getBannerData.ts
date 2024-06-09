import { type TBanner } from '@/entities/Banner';

const data: TBanner[] = [
  {
    id: '1',
    variant: ['left', 'white'],
    background: 'banner-s-1.jpg',
    subtitle: '',
    title: '100% Fresh Cow Milk',
    text: 'Starting at ',
    price: '$14.99',
  },
  {
    id: '2',
    variant: ['right'],
    background: 'banner-s-2.jpg',
    subtitle: 'Drink Sale',
    title: 'Water & Soft Drink',
    text: '',
    price: '',
  },
  {
    id: '3',
    variant: ['left'],
    background: 'banner-s-3.jpg',
    subtitle: '100% Organic',
    title: 'Quick Breakfast',
    text: '',
    price: '',
  },
];

export const getBannerData = () => {
  return { banners: data };
};
