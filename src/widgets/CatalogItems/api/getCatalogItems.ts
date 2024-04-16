import { nanoid } from 'nanoid';

import { TProduct } from '@/entities/Product';

const data: TProduct[] = [
    {
        id: nanoid(),
        img: '/images/product-big-potatos.jpg',
        title: 'Big Potatos',
        price: 14.99,
        path: '#',
        rating: 4,
    },
    {
        id: nanoid(),
        img: '/images/product-chanise-cabbage.jpg',
        title: 'Chanise Cabbage',
        price: 14.99,
        path: '#',
        rating: 4,
    },
    {
        id: nanoid(),
        img: '/images/product-ladies-finger.jpg',
        title: 'Ladies Finger',
        price: 14.99,
        path: '#',
        rating: 4,
        tags: [
            {
                type: 'black',
                text: 'Out of Stock',
            },
        ],
    },
    {
        id: nanoid(),
        img: '/images/product-eggplant.jpg',
        title: 'Eggplant',
        price: 14.99,
        path: '#',
        rating: 4,
    },
    {
        id: nanoid(),
        img: '/images/product-cauliflower.jpg',
        title: 'Fresh Cauliflower',
        price: 14.99,
        path: '#',
        rating: 4,
    },
    {
        id: nanoid(),
        img: '/images/product-apple.jpg',
        title: 'Green Apple',
        price: 14.99,
        path: '#',
        rating: 4,
    },

    {
        id: nanoid(),
        img: '/images/product-green-capsicum.jpg',
        title: 'Green Capsicum',
        price: 14.99,
        path: '#',
        rating: 4,
    },

    {
        id: nanoid(),
        img: '/images/product-green-chilli.jpg',
        title: 'Green Chili',
        price: 14.99,
        path: '#',
        rating: 4,
    },

    {
        id: nanoid(),
        img: '/images/product-green-cucumber.jpg',
        title: 'Green Cucumber',
        price: 14.99,
        priceOld: 20.99,
        path: '#',
        rating: 4,
    },
    {
        id: nanoid(),
        img: '/images/product-letucce.jpg',
        title: 'Green Lettuce',
        price: 14.99,
        path: '#',
        rating: 4,
    },
    {
        id: nanoid(),
        img: '/images/product-green-ladies-finger.jpg',
        title: 'Ladies Finger',
        price: 14.99,
        path: '#',
        rating: 4,
    },
    {
        id: nanoid(),
        img: '/images/product-red-capsicum.jpg',
        title: 'Green Capsicum',
        price: 14.99,
        path: '#',
        rating: 4,
    },

    {
        id: nanoid(),
        img: '/images/product-red-chilli.jpg',
        title: 'Red Chili',
        price: 14.99,
        path: '#',
        rating: 4,
    },

    {
        id: nanoid(),
        img: '/images/product-tomatos.jpg',
        title: 'Red Tomatos',
        price: 14.99,
        path: '#',
        rating: 4,
    },
    {
        id: nanoid(),
        img: '/images/product-mango.jpg',
        title: 'Surjapur Mango',
        price: 14.99,
        path: '#',
        rating: 4,
    },
];

export const getCatalogItems = () => {
    return { items: data };
};
