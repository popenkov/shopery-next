import { nanoid } from 'nanoid';

import { type TProduct } from '@/entities/Product';

const data: TProduct[] = [
  {
    id: nanoid(),
    path: '#',
    img: '/images/product-apple.jpg',
    title: 'Green Apple',
    price: { USD: 14.99, EUR: 12.2 },
    priceOld: { USD: 20.99, EUR: 18.2 },
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
    price: { USD: 14.99, EUR: 12.2 },
    rating: 4,
  },
  {
    id: nanoid(),
    path: '#',
    img: '/images/product-tomatos.jpg',
    title: 'Red Tomatos',
    price: { USD: 14.99, EUR: 12.2 },
    rating: 4,
  },
  {
    id: nanoid(),
    path: '#',
    img: '/images/product-cauliflower.jpg',
    title: 'Fresh Cauliflower',
    price: { USD: 14.99, EUR: 12.2 },
    rating: 4,
  },
  {
    id: nanoid(),
    path: '#',
    img: '/images/product-letucce.jpg',
    title: 'Green Lettuce',
    price: { USD: 14.99, EUR: 12.2 },
    rating: 4,
  },
];

export const getFeaturedProducts = () => {
  return { products: data };
};
