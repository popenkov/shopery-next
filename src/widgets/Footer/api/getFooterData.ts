import { nanoid } from 'nanoid';

import { Footer } from '../model';
import { getUserLocale } from '@/app/lib/locale';

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
const dataDe: Footer = {
  navigation: [
    {
      path: '/account',
      title: 'Konto',
      items: [
        {
          title: 'Mein Konto',
          path: '/account-1',
        },
        {
          title: 'Bestellverlauf',
          path: '/account-2',
        },
        {
          title: 'Tasche',
          path: '/account-3',
        },
        {
          title: 'Gespeicherten Produkten',
          path: '/account-4',
        },
        {
          title: 'Einstellungen',
          path: '/account-5',
        },
      ],
    },
    {
      path: '/helps',
      title: 'Hilfe',
      items: [
        {
          title: 'Kontakte',
          path: '/helps-1',
        },
        {
          title: 'FAQs',
          path: 'helps-2',
        },
        {
          title: 'Geschäftsbedingungen',
          path: 'helps-3',
        },
        {
          title: 'Datenschutzrichtlinie',
          path: 'helps-4',
        },
      ],
    },
    {
      path: '/proxy',
      title: 'proxy',
      items: [
        {
          title: 'Info',
          path: '/proxy-1',
        },
        {
          title: 'Shop',
          path: '/proxy-2',
        },
        {
          title: 'Produkt',
          path: '/proxy-3',
        },
        {
          title: 'Produktdetails',
          path: '/proxy-4',
        },
        {
          title: 'Bestellung verfolgen',
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

export const getFooterData = async () => {
  const locale = await getUserLocale();
  return locale === 'en' ? data : dataDe;
};
