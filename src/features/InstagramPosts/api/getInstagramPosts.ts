import { InstagramCardType } from '@/entities/InstagramCard';

const DATA: InstagramCardType[] = [
  {
    img: '/images/instagram--01.jpg',
    id: '#',
  },
  {
    img: '/images/instagram--02.jpg',
    id: '#',
  },
  {
    img: '/images/instagram--03.jpg',
    id: '#',
  },
  {
    img: '/images/instagram--04.jpg',
    id: '#',
  },
  {
    img: '/images/instagram--05.jpg',
    id: '#',
  },
  {
    img: '/images/instagram--06.jpg',
    id: '#',
  },
  {
    img: '/images/instagram--07.jpg',
    id: '#',
  },
  {
    img: '/images/instagram--08.jpg',
    id: '#',
  },
];
export const getInstagramPosts = () => {
  return { data: DATA };
};
