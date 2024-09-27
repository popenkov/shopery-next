import { type TSocialLink } from '../model';

const DATA: TSocialLink[] = [
  {
    id: 'FacebookIcon',
    icon: 'FacebookIcon',
    path: '/fb',
  },
  { id: 'TwitterIcon', icon: 'TwitterIcon', path: '/tw' },
  {
    id: 'PinterestIcon',
    icon: 'PinterestIcon',
    path: '/pint',
  },
  { id: 'InstagramIcon', icon: 'InstagramIcon', path: '/inst' },
];

export const getSocialData = () => {
  return DATA;
};
