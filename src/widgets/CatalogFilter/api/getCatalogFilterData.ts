import { nanoid } from 'nanoid';

const data = {
  filter: {
    categories: [
      { title: 'Fresh Fruit (25)', value: '', amount: '134' },
      { title: 'Vegetables', value: '', amount: '150' },
      { title: 'Cooking', value: 'cooking', amount: '54' },
      { title: 'Snacks', value: 'snacks', amount: '47' },
      { title: 'Beverages', value: 'beverages', amount: '43' },
      {
        title: 'Beauty & Health',
        value: 'beauty-n-health',
        amount: '38',
      },
      { title: 'Bread & Bakery', value: 'bread-n-bakery', amount: '15' },
    ],
    tags: [
      {
        text: 'Healthy',
        value: 'Healthy',
      },
      {
        text: 'Low fat',
        value: 'low-fat',
      },
      {
        text: 'Vegetarian',
        value: 'Vegetarian',
      },
      {
        text: 'Kid foods',
        value: 'kid-foods',
      },
      {
        text: 'Vitamins',
        value: 'Vitamins',
      },
      {
        text: 'Bread',
        value: 'Bread',
      },
      {
        text: 'Meat',
        value: 'Meat',
      },
      {
        text: 'Snacks',
        value: 'Snacks',
      },
      {
        text: 'Tiffin',
        value: 'Tiffin',
      },
      {
        text: 'Launch',
        value: 'Launch',
      },
      {
        text: 'Dinner',
        value: 'Dinner',
      },
      {
        text: 'Breackfast',
        value: 'Breackfast',
      },
      {
        text: 'Fruit',
        value: 'Fruit',
      },
    ],
  },
  featuredItems: [
    {
      id: nanoid(),
      path: '#',
      img: '/images/product-small--red-capsicum.jpg',
      title: 'Red Capsicum',
      price: { USD: 20.99, EUR: 18.2 },
      priceOld: { USD: 20.99, EUR: 18.2 },
      rating: 4,
    },
    {
      id: nanoid(),
      path: '#',
      img: '/images/product-small--chanise-cabbage.jpg',
      title: 'Chanise Cabbage',
      price: { USD: 20.99, EUR: 18.2 },
      priceOld: { USD: 220.99, EUR: 198.2 },
      rating: 4,
    },
    {
      id: nanoid(),
      path: '#',
      img: '/images/product-small--green-capsicum.jpg',
      title: 'Green Capsicum',
      price: { USD: 20.99, EUR: 18.2 },
      priceOld: { USD: 20.99, EUR: 18.2 },
      rating: 4,
    },
  ],
  banner: {
    image: '/images/discount-banner--1.jpg',
    title: '79% Discount',
    subtitle: 'on your first order',
    path: '#',
  },
};

export const getCatalogFilterData = () => {
  return data;
};
