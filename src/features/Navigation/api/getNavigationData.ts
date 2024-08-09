import { getUserLocale } from '@/app/lib/locale';
import { TNavigation } from '../model';

const data: TNavigation = {
  categories: [
    {
      path: '/catalog',
      icon: 'AppleIcon',
      title: 'Fresh Fruit',
    },
    {
      path: '/catalog',
      icon: 'SaladIcon',
      title: 'Vegetables',
    },
    { path: '/catalog', icon: 'FishIcon', title: 'River Fish' },
    { path: '/catalog', icon: 'CoffeeIcon', title: 'Drink & Water' },
    {
      path: '/catalog',
      icon: 'IceCreamIcon',
      title: 'Yogurt & Ice Cream',
    },
    {
      path: '/catalog',
      icon: 'CupcakeIcon',
      title: 'Cake & Bread',
    },
    { path: '/catalog', icon: 'PieIcon', title: 'Butter & Cream' },
    { path: '/catalog', icon: 'FoodIcon', title: 'Cooking' },
  ],
  navigation: [
    {
      title: 'Home',
      path: '/',
      items: [
        { title: 'Home 1', path: '/home-1' },
        { title: 'Home 1', path: '/home-2' },
        { title: 'Home 1', path: '/home-3' },
        { title: 'Home 1', path: '/home-4' },
      ],
    },
    {
      title: 'Shop',
      path: '/catalog',
      items: [
        { title: 'Shop 1', path: '/shop-1' },
        { title: 'Shop 1', path: '/shop-2' },
      ],
    },
    {
      title: 'Pages',
      path: '/catalog',
      items: [
        { title: 'Pages 1', path: '/page-1' },
        { title: 'Pages 1', path: '/page-2' },
      ],
    },
    {
      title: 'Blog',
      path: '/blog',
      items: [
        { title: 'Blog 1', path: '/blog-1' },
        { title: 'Blog 1', path: '/blog-2' },
        { title: 'Blog 1', path: '/blog-3' },
        { title: 'Blog 1', path: '/blog-4' },
      ],
    },
    {
      title: 'About us',
      path: '/about',
    },
    {
      title: 'Contact us',
      path: '/contacts',
    },
  ],
};

const dataDe: TNavigation = {
  categories: [
    {
      path: '/katalog',
      icon: 'AppleIcon',
      title: 'Frisches Obst',
    },
    {
      path: '/katalog',
      icon: 'SaladIcon',
      title: 'Gemüse',
    },
    { path: '/katalog', icon: 'FishIcon', title: 'Flussfisch' },
    { path: '/katalog', icon: 'CoffeeIcon', title: 'Getränke' },
    {
      path: '/katalog',
      icon: 'IceCreamIcon',
      title: 'Joghurt und Eis',
    },
    {
      path: '/katalog',
      icon: 'CupcakeIcon',
      title: 'Kuchen und Brot',
    },
    { path: '/katalog', icon: 'PieIcon', title: 'Butter und Sahne' },
    { path: '/katalog', icon: 'FoodIcon', title: 'Kochen' },
  ],
  navigation: [
    {
      title: 'Heim',
      path: '/',
      items: [
        { title: 'Heim 1', path: '/home-1' },
        { title: 'Heim 1', path: '/home-2' },
        { title: 'Heim 1', path: '/home-3' },
        { title: 'Heim 1', path: '/home-4' },
      ],
    },
    {
      title: 'Shop',
      path: '/Shop',
      items: [
        { title: 'Shop 1', path: '/shop-1' },
        { title: 'Shop 1', path: '/shop-2' },
      ],
    },
    {
      title: 'Seiten',
      path: '/page',
      items: [
        { title: 'Seiten 1', path: '/page-1' },
        { title: 'Seiten 1', path: '/page-2' },
      ],
    },
    {
      title: 'Blog',
      path: '/blog',
      items: [
        { title: 'Blog 1', path: '/blog-1' },
        { title: 'Blog 1', path: '/blog-2' },
        { title: 'Blog 1', path: '/blog-3' },
        { title: 'Blog 1', path: '/blog-4' },
      ],
    },
    {
      title: 'Über uns',
      path: '/about',
    },
    {
      title: 'Kontaktiere uns',
      path: '/contacts',
    },
  ],
};

export const getNavigationData = async () => {
  const locale = await getUserLocale();
  return locale === 'en' ? data : dataDe;
};
