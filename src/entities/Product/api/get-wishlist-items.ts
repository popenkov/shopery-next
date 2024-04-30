import { nanoid } from 'nanoid';

const data = [
    {
        id: nanoid(),
        path: '/',
        img: '/images/product-apple.jpg',
        title: 'Green Capsicum',
        price: 14.99,
        priceOld: 20.99,
        stock: {
            type: 'in-stock',
            text: 'In Stock',
        },
    },
    {
        id: nanoid(),
        path: '/',
        img: '/images/product-apple.jpg',
        title: 'Chinese Cabbage',
        price: 45.0,

        stock: {
            type: 'in-stock',
            text: 'In Stock',
        },
    },
    {
        id: nanoid(),
        path: '/',
        img: '/images/product-apple.jpg',
        title: 'Fresh Sujapuri Mango',
        price: 14.99,
        priceOld: 20.99,
        stock: {
            type: 'not-available',
            text: 'Out of Stock',
        },
    },
];

export const getWishlistItems = () => {
    return { items: data };
};
