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

export const getNavigationData = () => {
  return data;
};
