import { TUserOrder } from '../model/types';

const ORDER_DATA: TUserOrder = {
  id: 1,
  paymentMethod: 'PayPal',
  items: [
    {
      id: 1,
      img: '/images/product-small--red-capsicum.jpg',
      name: 'Red Capsicum',
      price: 14,
      quantity: 5,
      total: 70,
    },
    {
      id: 2,
      img: '/images/product-small--green-capsicum.jpg',
      name: 'Green Capsicum',
      price: 14,
      quantity: 2,
      total: 28,
    },
    {
      id: 3,
      img: '/images/product-green-chilli.jpg',
      name: 'Green Chili',
      price: 26.7,
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
    name: 'Dainne Russell',
    street: '4140 Parker Rd. Allentown, New Mexico 31134',
    email: 'dainne.ressell@gmail.com',
    phone: '(671) 555-0110',
  },
  user: { photo: '/images/user-photo--1.jpg', name: 'Dianne Russell', role: 'Customer' },
};
export const getUserOrderById = (id: string) => {
  console.log(id);
  return ORDER_DATA;
};
