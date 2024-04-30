import { nanoid } from 'nanoid';

import { TProduct } from '@/entities/Product';
import { TabItem } from '@/shared/ui/Tabs';

const data: TabItem<TProduct>[] = [
    {
        id: 'tab1',
        label: 'All',
        content: [
            {
                id: nanoid(),
                path: '#',
                img: '/images/product-apple.jpg',
                title: '1 Green Apple',
                price: 14.99,
                priceOld: 20.99,
                rating: 4,
                tags: [
                    {
                        type: 'red',
                        text: 'Sale 50%',
                    },
                ],
            },
            {
                id: nanoid(),
                path: '#',
                img: '/images/product-mango.jpg',
                title: '1 Surjapur Mango',
                price: 14.99,
                rating: 4,
            },
            {
                id: nanoid(),
                path: '#',
                img: '/images/product-tomatos.jpg',
                title: '1 Red Tomatos',
                price: 14.99,
                rating: 4,
            },
            {
                id: nanoid(),
                path: '#',
                img: '/images/product-cauliflower.jpg',
                title: '1 Fresh Cauliflower',
                price: 14.99,
                rating: 4,
            },
            {
                id: nanoid(),
                path: '#',
                img: '/images/product-letucce.jpg',
                title: '1 Green Lettuce',
                price: 14.99,
                rating: 4,
            },
            {
                id: nanoid(),
                path: '#',
                img: '/images/product-eggplant.jpg',
                title: '1 Eggplant',
                price: 14.99,
                rating: 4,
            },
            {
                id: nanoid(),
                path: '#',
                img: '/images/product-chilli.jpg',
                title: '1 Green Chilli',
                price: 14.99,
                rating: 4,
            },
            {
                id: nanoid(),
                path: '#',
                img: '/images/product-eggplant-dark.jpg',
                title: '1 Eggplant',
                price: 14.99,
                rating: 4,
            },
        ],
    },
    {
        id: 'tab2',
        label: 'Vegetables',
        content: [
            {
                id: nanoid(),
                path: '#',
                img: '/images/product-apple.jpg',
                title: 'Green Apple',
                price: 14.99,
                priceOld: 20.99,
                rating: 4,
                tags: [
                    {
                        type: 'red',
                        text: 'Sale 50%',
                    },
                ],
            },
            {
                id: nanoid(),
                path: '#',
                img: '/images/product-mango.jpg',
                title: 'Surjapur Mango',
                price: 14.99,
                rating: 4,
            },
            {
                id: nanoid(),
                path: '#',
                img: '/images/product-tomatos.jpg',
                title: 'Red Tomatos',
                price: 14.99,
                rating: 4,
            },
            {
                id: nanoid(),
                path: '#',
                img: '/images/product-cauliflower.jpg',
                title: 'Fresh Cauliflower',
                price: 14.99,
                rating: 4,
            },
            {
                id: nanoid(),
                path: '#',
                img: '/images/product-letucce.jpg',
                title: 'Green Lettuce',
                price: 14.99,
                rating: 4,
            },
            {
                id: nanoid(),
                path: '#',
                img: '/images/product-eggplant.jpg',
                title: 'Eggplant',
                price: 14.99,
                rating: 4,
            },
            {
                id: nanoid(),
                path: '#',
                img: '/images/product-chilli.jpg',
                title: 'Green Chilli',
                price: 14.99,
                rating: 4,
            },
            {
                id: nanoid(),
                path: '#',
                img: '/images/product-eggplant-dark.jpg',
                title: 'Eggplant',
                price: 14.99,
                rating: 4,
            },
        ],
    },
    {
        id: 'tab3',
        label: 'Fruit',
        content: [],
    },
    {
        id: 'tab4',
        label: 'Meat & Fish',
        content: [],
    },
];

export const getProductTab = () => {
    return { productTabs: data };
};
