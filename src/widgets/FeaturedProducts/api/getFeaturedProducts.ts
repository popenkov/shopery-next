import { nanoid } from 'nanoid';

import { type TProduct } from '@/entities/Product';

const data: TProduct[] = [
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
];

export const getFeaturedProducts = () => {
  return { products: data };
};
