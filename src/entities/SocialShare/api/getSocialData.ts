import { nanoid } from 'nanoid';

import { type TSocialLink } from '../model';

const DATA: TSocialLink[] = [
  {
    id: nanoid(),
    icon: 'FacebookIcon',
    path: '/fb',
  },
  { id: nanoid(), icon: 'TwitterIcon', path: '/tw' },
  {
    id: nanoid(),
    icon: 'PinterestIcon',
    path: '/pint',
  },
  { id: nanoid(), icon: 'InstagramIcon', path: '/inst' },
];

export const getSocialData = () => {
  return DATA;
};
