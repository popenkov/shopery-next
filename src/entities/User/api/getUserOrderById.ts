import { type TUserOrder } from '../model';

const ORDER_DATA: TUserOrder = {
  id: 1,
  date: 'April 24, 2021',
  amount: 3,

  paymentMethod: 'PayPal',
  items: [
    {
      id: 1,
      path: '#',
      img: '/images/product-small--red-capsicum.jpg',
      name: 'Red Capsicum',
      price: { USD: 14.99, EUR: 12.2 },
      quantity: 5,
      total: 70,
    },
    {
      id: 2,
      path: '#',
      img: '/images/product-small--green-capsicum.jpg',
      name: 'Green Capsicum',
      price: { USD: 14.99, EUR: 12.2 },
      quantity: 2,
      total: 28,
    },
    {
      id: 3,
      path: '#',
      img: '/images/product-green-chilli.jpg',
      name: 'Green Chili',
      price: { USD: 14.99, EUR: 12.2 },
      quantity: 10,
      total: 267,
    },
  ],
  subtotal: 365,
  discount: 20,
  delivery: null,
  total: 84,
  status: 'Processing',
  address: {
    firstName: 'Tony',
    lastName: 'Honest',
    companyName: 'Google',
    streetAddress: '1600 Amphitheatre Parkway',
    countryAddress: 'US',
    countryState: 'MT',
    zipAddress: '333 333',
    email: 'test@test.ru',
    phone: '+3 (333) 333-33-33',
  },
  user: { id: '1', photo: '/images/user-photo--1.jpg', name: 'Dianne Russell', role: 'Customer' },
};
export const getUserOrderById = () => {
  return ORDER_DATA;
};
