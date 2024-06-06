import { nanoid } from 'nanoid';

import { SocialLink } from '../model';

const DATA: SocialLink[] = [
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
