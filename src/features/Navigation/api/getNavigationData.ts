import { NavigationType } from '../model/interfaces/navigation.interface';

const data: NavigationType = {
  categories: [
    {
      id: '/apple',
      icon: 'icon__apple',
      title: 'Fresh Fruit',
    },
    {
      id: '/salad',
      icon: 'icon__salad',
      title: 'Vegetables',
    },
    { id: '/fish', icon: 'icon__fish', title: 'River Fish' },
    { id: '/coffee', icon: 'icon__coffee', title: 'Drink & Water' },
    { id: '/ice_cream', icon: 'icon__ice_cream', title: 'Yogurt & Ice Cream' },
    {
      id: '/cupcake',
      icon: 'icon__cupcake',
      title: 'Cake & Bread',
    },
    { id: '/pie', icon: 'icon__pie', title: 'Butter & Cream' },
    { id: '/food', icon: 'icon__food', title: 'Cooking' },
  ],
  navigation: [
    {
      title: 'Home',
      id: '/home',
      items: [
        { title: 'Home 1', id: '/home-1' },
        { title: 'Home 1', id: '/home-2' },
        { title: 'Home 1', id: '/home-3' },
        { title: 'Home 1', id: '/home-4' },
      ],
    },
    {
      title: 'Shop',
      id: '/shop',
      items: [
        { title: 'Shop 1', id: '/shop-1' },
        { title: 'Shop 1', id: '/shop-2' },
      ],
    },
    {
      title: 'Pages',
      id: '/pages',
      items: [
        { title: 'Pages 1', id: '/page-1' },
        { title: 'Pages 1', id: '/page-2' },
      ],
    },
    {
      title: 'Blog',
      id: '/blog',
      items: [
        { title: 'Blog 1', id: '/blog-1' },
        { title: 'Blog 1', id: '/blog-2' },
        { title: 'Blog 1', id: '/blog-3' },
        { title: 'Blog 1', id: '/blog-4' },
      ],
    },
    {
      title: 'About us',
      id: '/about',
    },
    {
      title: 'Contact us',
      id: '/contacts',
    },
  ],
};

export const getNavigationData = () => {
  return data;
};
