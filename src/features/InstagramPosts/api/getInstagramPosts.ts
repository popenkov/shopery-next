import { TInstagramCard } from '@/entities/InstagramCard';

const DATA: TInstagramCard[] = [
  {
    img: '/images/instagram--01.jpg',
    id: '/instagram--01',
  },
  {
    img: '/images/instagram--02.jpg',
    id: '/instagram--02',
  },
  {
    img: '/images/instagram--03.jpg',
    id: '/instagram--03',
  },
  {
    img: '/images/instagram--04.jpg',
    id: '/instagram--04',
  },
  {
    img: '/images/instagram--05.jpg',
    id: '/instagram--05',
  },
  {
    img: '/images/instagram--06.jpg',
    id: '/instagram--06',
  },
  {
    img: '/images/instagram--07.jpg',
    id: '/instagram--07',
  },
  {
    img: '/images/instagram--08.jpg',
    id: '/instagram--08',
  },
];
export const getInstagramPosts = () => {
  return { data: DATA };
};
