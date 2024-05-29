import { TUserOrder } from '../model/types';

const UserOrders: TUserOrder[] = [
  {
    id: 738,
    date: '8 Sep, 2020',
    price: 135.0,
    amount: 5,
    status: 'Processing',
  },
  {
    id: 703,
    date: '24 May, 2020',
    price: 25.0,
    amount: 1,
    status: 'On the way',
  },
  {
    id: 130,
    date: '22 Oct, 2020',
    price: 250.0,
    amount: 4,
    status: 'Completed',
  },
  {
    id: 738,
    date: '8 Sep, 2020',
    price: 35.0,
    amount: 1,
    status: 'Completed',
  },
  {
    id: 738,
    date: '8 Sep, 2020',
    price: 578.0,
    amount: 1,
    status: 'Completed',
  },
  {
    id: 738,
    date: '22 Oct, 2020',
    price: 345.0,
    amount: 1,
    status: 'Completed',
  },
  {
    id: 738,
    date: '8 Sep, 2020',
    price: 135.0,
    amount: 5,
    status: 'Processing',
  },
  {
    id: 703,
    date: '24 May, 2020',
    price: 25.0,
    amount: 1,
    status: 'On the way',
  },
  {
    id: 130,
    date: '22 Oct, 2020',
    price: 250.0,
    amount: 4,
    status: 'Completed',
  },
  {
    id: 738,
    date: '8 Sep, 2020',
    price: 35.0,
    amount: 1,
    status: 'Completed',
  },
  {
    id: 738,
    date: '8 Sep, 2020',
    price: 578.0,
    amount: 1,
    status: 'Completed',
  },
  {
    id: 738,
    date: '22 Oct, 2020',
    price: 345.0,
    amount: 1,
    status: 'Completed',
  },
];

export const getUserOrders = () => {
  return UserOrders;
};
