import { Footer } from '../model/interface/footer.interface';

const data: Footer = {
  navigation: [
    {
      id: '/account',
      title: 'account',
      items: [
        {
          title: 'My Account',
          id: '/account-1',
        },
        {
          title: 'Order History',
          id: '/account-2',
        },
        {
          title: 'Shoping Cart',
          id: '/account-3',
        },
        {
          title: 'Wishlist',
          id: '/account-4',
        },
        {
          title: 'Settings',
          id: '/account-5',
        },
      ],
    },
    {
      id: '/helps',
      title: 'helps',
      items: [
        {
          title: 'Contact',
          id: '/helps-1',
        },
        {
          title: 'Faqs',
          id: 'helps-2',
        },
        {
          title: 'Terms & Condition',
          id: 'helps-3',
        },
        {
          title: 'Privacy Policy',
          id: 'helps-4',
        },
      ],
    },
    {
      id: '/proxy',
      title: 'proxy',
      items: [
        {
          title: 'About',
          id: '/proxy-1',
        },
        {
          title: 'Shop',
          id: '/proxy-2',
        },
        {
          title: 'Product',
          id: '/proxy-3',
        },
        {
          title: 'Products Details',
          id: '/proxy-4',
        },
        {
          title: 'Track Order',
          id: '/proxy-5',
        },
      ],
    },
  ],

  socialLinks: [
    {
      icon: 'icon__facebook',
      id: '/fb',
    },
    {
      icon: 'icon__twitter',
      id: '/tw',
    },
    {
      icon: 'icon__pinterest',
      id: '/pint',
    },
    {
      icon: 'icon__instagram',
      id: '/inst',
    },
  ],
  paymentMethods: [
    {
      icon: 'icon__applepay',
      id: '/apple',
    },
    {
      icon: 'icon__visa',
      id: '/visa',
    },
    {
      icon: 'icon__discover',
      id: '/discover',
    },
    {
      icon: 'icon__mastercard',
      id: '/mc',
    },
    {
      icon: 'icon__secure',
      id: '/secure',
    },
  ],
};

export const getFooterData = () => {
  return data;
};
