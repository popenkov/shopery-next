import { nanoid } from 'nanoid';

import { Footer } from '../model';

const data: Footer = {
  navigation: [
    {
      path: '/account',
      title: 'account',
      items: [
        {
          title: 'My Account',
          path: '/account-1',
        },
        {
          title: 'Order History',
          path: '/account-2',
        },
        {
          title: 'Shoping Cart',
          path: '/account-3',
        },
        {
          title: 'Wishlist',
          path: '/account-4',
        },
        {
          title: 'Settings',
          path: '/account-5',
        },
      ],
    },
    {
      path: '/helps',
      title: 'helps',
      items: [
        {
          title: 'Contact',
          path: '/helps-1',
        },
        {
          title: 'Faqs',
          path: 'helps-2',
        },
        {
          title: 'Terms & Condition',
          path: 'helps-3',
        },
        {
          title: 'Privacy Policy',
          path: 'helps-4',
        },
      ],
    },
    {
      path: '/proxy',
      title: 'proxy',
      items: [
        {
          title: 'About',
          path: '/proxy-1',
        },
        {
          title: 'Shop',
          path: '/proxy-2',
        },
        {
          title: 'Product',
          path: '/proxy-3',
        },
        {
          title: 'Products Details',
          path: '/proxy-4',
        },
        {
          title: 'Track Order',
          path: '/proxy-5',
        },
      ],
    },
  ],

  socialLinks: [
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
  ],
  paymentMethods: [
    { id: nanoid(), icon: 'ApplePayIcon', path: '/apple' },
    { id: nanoid(), icon: 'VisaIcon', path: '/visa' },
    { id: nanoid(), icon: 'DiscoverIcon', path: '/discover' },
    {
      id: nanoid(),
      icon: 'MastercardIcon',
      path: '/mc',
    },
    { id: nanoid(), icon: 'SecureIcon', path: '/secure' },
  ],
};

export const getFooterData = () => {
  return data;
};
