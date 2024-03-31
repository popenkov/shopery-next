import { nanoid } from 'nanoid';
import { ProductInterface } from '@/entities/Product';

const data: ProductInterface[] = [
  {
    id: nanoid(),
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
    img: '/images/product-mango.jpg',
    title: 'Surjapur Mango',
    price: 14.99,
    rating: 4,
  },
  {
    id: nanoid(),
    img: '/images/product-tomatos.jpg',
    title: 'Red Tomatos',
    price: 14.99,
    rating: 4,
  },
  {
    id: nanoid(),
    img: '/images/product-cauliflower.jpg',
    title: 'Fresh Cauliflower',
    price: 14.99,
    rating: 4,
  },
  {
    id: nanoid(),
    img: '/images/product-letucce.jpg',
    title: 'Green Lettuce',
    price: 14.99,
    rating: 4,
  },
];

export const getFeaturedProducts = () => {
  return { products: data };
};
