import { Footer } from '../model/interface/footer.interface';

const data: Footer = {
  navigation: [
    {
      id: '#',
      title: 'account',
      items: [
        {
          title: 'My Account',
          id: '#',
        },
        {
          title: 'Order History',
          id: '#',
        },
        {
          title: 'Shoping Cart',
          id: '#',
        },
        {
          title: 'Wishlist',
          id: '#',
        },
        {
          title: 'Settings',
          id: '#',
        },
      ],
    },
    {
      id: '#',
      title: 'helps',
      items: [
        {
          title: 'Contact',
          id: '#',
        },
        {
          title: 'Faqs',
          id: '#',
        },
        {
          title: 'Terms & Condition',
          id: '#',
        },
        {
          title: 'Privacy Policy',
          id: '#',
        },
      ],
    },
    {
      id: '#',
      title: 'proxy',
      items: [
        {
          title: 'About',
          id: '#',
        },
        {
          title: 'Shop',
          id: '#',
        },
        {
          title: 'Product',
          id: '#',
        },
        {
          title: 'Products Details',
          id: '#',
        },
        {
          title: 'Track Order',
          id: '#',
        },
      ],
    },
  ],

  socialLinks: [
    {
      icon: 'icon__facebook',
      id: '#',
    },
    {
      icon: 'icon__twitter',
      id: '#',
    },
    {
      icon: 'icon__pinterest',
      id: '#',
    },
    {
      icon: 'icon__instagram',
      id: '#',
    },
  ],
  paymentMethods: [
    {
      icon: 'icon__applepay',
      id: '#',
    },
    {
      icon: 'icon__visa',
      id: '#',
    },
    {
      icon: 'icon__discover',
      id: '#',
    },
    {
      icon: 'icon__mastercard',
      id: '#',
    },
    {
      icon: 'icon__secure',
      id: '#',
    },
  ],
};

export const getFooterData = () => {
  return data;
};
