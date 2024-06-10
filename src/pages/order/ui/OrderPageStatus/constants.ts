import { nanoid } from 'nanoid';

export const STATUS_DATA = [
  {
    id: nanoid(),
    percent: 0,
    bulletContent: '',
    text: 'Order received',
  },
  {
    id: nanoid(),
    percent: 25,
    bulletContent: '02',
    text: 'Processing',
  },
  {
    id: nanoid(),
    percent: 50,
    bulletContent: '03',
    text: 'On the way',
  },
  {
    id: nanoid(),
    percent: 75,
    bulletContent: '04',
    text: 'Delivered',
  },
];
