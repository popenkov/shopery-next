import { nanoid } from 'nanoid';

import { TNews } from '@/entities/News';

const data: TNews[] = [
  {
    id: nanoid(),
    dateDay: '23',
    dateMonth: 'Jan',
    img: '/images/news-img--1.jpg',
    title: 'Curabitur porttitor orci eget neque accumsan venenatis.',
    text: 'Nulla libero lorem, euismod venenatis nibh sed, sodales dictum ex. Etiam nisi augue, malesuada et pulvinar at, posuere eu neque.',
    path: '#',
  },
  {
    id: nanoid(),
    dateDay: '23',
    dateMonth: 'Jan',
    img: '/images/news-img--2.jpg',
    title: 'Curabitur porttitor orci eget neque accumsan venenatis.',
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
    path: '#',
  },
  {
    id: nanoid(),
    dateDay: '23',
    dateMonth: 'Jan',
    img: '/images/news-img--3.jpg',
    title: 'Curabitur porttitor orci eget neque accumsan venenatis.',
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
    path: '#',
  },
];

export const getNewsData = () => {
  return { news: data };
};
