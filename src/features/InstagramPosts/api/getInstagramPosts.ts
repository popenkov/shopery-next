import { TInstagramCard } from '@/entities/InstagramCard';

const DATA: TInstagramCard[] = [
  {
    img: '/images/instagram--01.jpg',
    id: '/instagram--01',
    path: '/instagram--01',
  },
  {
    img: '/images/instagram--02.jpg',
    id: '/instagram--02',
    path: '/instagram--02',
  },
  {
    img: '/images/instagram--03.jpg',
    id: '/instagram--03',
    path: '/instagram--03',
  },
  {
    img: '/images/instagram--04.jpg',
    id: '/instagram--04',
    path: '/instagram--04',
  },
  {
    img: '/images/instagram--05.jpg',
    id: '/instagram--05',
    path: '/instagram--05',
  },
  {
    img: '/images/instagram--06.jpg',
    id: '/instagram--06',
    path: '/instagram--06',
  },
  {
    img: '/images/instagram--07.jpg',
    id: '/instagram--07',
    path: '/instagram--07',
  },
  {
    img: '/images/instagram--08.jpg',
    id: '/instagram--08',
    path: '/instagram--08',
  },
];
export const getInstagramPosts = () => {
  return { data: DATA };
};
