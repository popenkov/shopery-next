import { nanoid } from 'nanoid';

import { type TProduct } from '@/entities/Product';
import { TTabItem } from '@/shared/ui/ProductTabs';

const data: TTabItem<TProduct>[] = [
  {
    id: 'tab1',
    label: 'All',
    content: [
      {
        id: nanoid(),
        path: '#',
        img: '/images/product-apple.jpg',
        title: '1 Green Apple',
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
        title: '1 Surjapur Mango',
        price: { USD: 14.99, EUR: 12.2 },
        rating: 4,
      },
      {
        id: nanoid(),
        path: '#',
        img: '/images/product-tomatos.jpg',
        title: '1 Red Tomatos',
        price: { USD: 14.99, EUR: 12.2 },
        rating: 4,
      },
      {
        id: nanoid(),
        path: '#',
        img: '/images/product-cauliflower.jpg',
        title: '1 Fresh Cauliflower',
        price: { USD: 14.99, EUR: 12.2 },
        rating: 4,
      },
      {
        id: nanoid(),
        path: '#',
        img: '/images/product-letucce.jpg',
        title: '1 Green Lettuce',
        price: { USD: 14.99, EUR: 12.2 },
        rating: 4,
      },
      {
        id: nanoid(),
        path: '#',
        img: '/images/product-eggplant.jpg',
        title: '1 Eggplant',
        price: { USD: 14.99, EUR: 12.2 },
        rating: 4,
      },
      {
        id: nanoid(),
        path: '#',
        img: '/images/product-chilli.jpg',
        title: '1 Green Chilli',
        price: { USD: 14.99, EUR: 12.2 },
        rating: 4,
      },
      {
        id: nanoid(),
        path: '#',
        img: '/images/product-eggplant-dark.jpg',
        title: '1 Eggplant',
        price: { USD: 14.99, EUR: 12.2 },
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
      {
        id: nanoid(),
        path: '#',
        img: '/images/product-eggplant.jpg',
        title: 'Eggplant',
        price: { USD: 14.99, EUR: 12.2 },
        rating: 4,
      },
      {
        id: nanoid(),
        path: '#',
        img: '/images/product-chilli.jpg',
        title: 'Green Chilli',
        price: { USD: 14.99, EUR: 12.2 },
        rating: 4,
      },
      {
        id: nanoid(),
        path: '#',
        img: '/images/product-eggplant-dark.jpg',
        title: 'Eggplant',
        price: { USD: 14.99, EUR: 12.2 },
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
