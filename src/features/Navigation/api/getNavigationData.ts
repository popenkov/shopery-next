import { TNavigation } from '../model/types/navigation.types';

const data: TNavigation = {
    categories: [
        {
            path: '/apple',
            icon: 'icon__apple',
            title: 'Fresh Fruit',
        },
        {
            path: '/salad',
            icon: 'icon__salad',
            title: 'Vegetables',
        },
        { path: '/fish', icon: 'icon__fish', title: 'River Fish' },
        { path: '/coffee', icon: 'icon__coffee', title: 'Drink & Water' },
        {
            path: '/ice_cream',
            icon: 'icon__ice_cream',
            title: 'Yogurt & Ice Cream',
        },
        {
            path: '/cupcake',
            icon: 'icon__cupcake',
            title: 'Cake & Bread',
        },
        { path: '/pie', icon: 'icon__pie', title: 'Butter & Cream' },
        { path: '/food', icon: 'icon__food', title: 'Cooking' },
    ],
    navigation: [
        {
            title: 'Home',
            path: '/home',
            items: [
                { title: 'Home 1', path: '/home-1' },
                { title: 'Home 1', path: '/home-2' },
                { title: 'Home 1', path: '/home-3' },
                { title: 'Home 1', path: '/home-4' },
            ],
        },
        {
            title: 'Shop',
            path: '/shop',
            items: [
                { title: 'Shop 1', path: '/shop-1' },
                { title: 'Shop 1', path: '/shop-2' },
            ],
        },
        {
            title: 'Pages',
            path: '/pages',
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
