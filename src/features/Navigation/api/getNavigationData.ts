import { NavigationType } from '../model/types/navigation.interface';

const data: NavigationType = {
  categories: [
    {
      id: '#',
      icon: 'icon__apple',
      title: 'Fresh Fruit',
    },
    {
      id: '#',
      icon: 'icon__salad',
      title: 'Vegetables',
    },
    { id: '#', icon: 'icon__fish', title: 'River Fish' },
    { id: '#', icon: 'icon__coffee', title: 'Drink & Water' },
    { id: '#', icon: 'icon__ice_cream', title: 'Yogurt & Ice Cream' },
    {
      id: '#',
      icon: 'icon__cupcake',
      title: 'Cake & Bread',
    },
    { id: '#', icon: 'icon__pie', title: 'Butter & Cream' },
    { id: '#', icon: 'icon__food', title: 'Cooking' },
  ],
  navigation: [
    {
      title: 'Home',
      id: '#',
      items: [
        { title: 'Home 1', id: '#' },
        { title: 'Home 1', id: '#' },
        { title: 'Home 1', id: '#' },
        { title: 'Home 1', id: '#' },
      ],
    },
    {
      title: 'Shop',
      id: '#',
      items: [
        { title: 'Shop 1', id: '#' },
        { title: 'Shop 1', id: '#' },
        { title: 'Shop 1', id: '#' },
        { title: 'Shop 1', id: '#' },
      ],
    },
    {
      title: 'Pages',
      id: '#',
      items: [
        { title: 'Pages 1', id: '#' },
        { title: 'Pages 1', id: '#' },
        { title: 'Pages 1', id: '#' },
        { title: 'Pages 1', id: '#' },
      ],
    },
    {
      title: 'Blog',
      id: '#',
      items: [
        { title: 'Blog 1', id: '#' },
        { title: 'Blog 1', id: '#' },
        { title: 'Blog 1', id: '#' },
        { title: 'Blog 1', id: '#' },
      ],
    },
    {
      title: 'About us',
      id: '#',
    },
    {
      title: 'Contact us',
      id: '#',
    },
  ],
};

export const getNavigationData = () => {
  return data;
};
