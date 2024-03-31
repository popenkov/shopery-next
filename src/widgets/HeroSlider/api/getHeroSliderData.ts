import { nanoid } from 'nanoid';
import { THeroSlide } from '@/entities/HeroSlide';

const data: THeroSlide[] = [
  {
    path: nanoid(),
    image: '/images/hero-slide-0.jpg',
    note: 'Welcome to shopery',
    title: 'Fresh & Healthy Organic Food',
    text: 'Free shipping on all your order. we deliver, you enjoy',
  },
  {
    path: nanoid(),
    image: '/images/hero-slide-1.jpg',
    note: 'Welcome to shopery',
    title: 'Nulla facilisi. Donec ex libero',
    text: 'Lorem Ipsum ist ein einfacher Demo-Text für die Print- und Schriftindustrie.',
  },
  {
    path: nanoid(),
    image: '/images/hero-slide-2.jpg',
    note: 'Welcome to shopery',
    title: 'Lorem ipsum dolor sit amet',
    text: 'Da ist niemand der den Schmerz an sich liebt, der danach sucht und ihn haben möchte, einfach weil es Schmerz ist...',
  },
];

export const getHeroSliderData = () => {
  return { data };
};
