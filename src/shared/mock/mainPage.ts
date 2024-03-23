import { MainPageData } from '../interfaces/main-page';
import { BannerType } from '../ui';

export const MAIN_PAGE_DATA: MainPageData = {
  header: {
    categories: [
      {
        link: '#',
        icon: 'icon__apple',
        title: 'Fresh Fruit',
      },
      {
        link: '#',
        icon: 'icon__salad',
        title: 'Vegetables',
      },
      { link: '#', icon: 'icon__fish', title: 'River Fish' },
      { link: '#', icon: 'icon__coffee', title: 'Drink & Water' },
      { link: '#', icon: 'icon__ice-cream', title: 'Yogurt & Ice Cream' },
      {
        icon: 'icon__cupcake',
        title: 'Cake & Bread',
      },
      { link: '#', icon: 'icon__pie', title: 'Butter & Cream' },
      { link: '#', icon: 'icon__food', title: 'Cooking' },
    ],
    navigation: [
      {
        title: 'Home',
        link: '#',
        items: [
          { title: 'Home 1', link: '#' },
          { title: 'Home 1', link: '#' },
          { title: 'Home 1', link: '#' },
          { title: 'Home 1', link: '#' },
        ],
      },
      {
        title: 'Shop',
        link: '#',
        items: [
          { title: 'Shop 1', link: '#' },
          { title: 'Shop 1', link: '#' },
          { title: 'Shop 1', link: '#' },
          { title: 'Shop 1', link: '#' },
        ],
      },
      {
        title: 'Pages',
        link: '#',
        items: [
          { title: 'Pages 1', link: '#' },
          { title: 'Pages 1', link: '#' },
          { title: 'Pages 1', link: '#' },
          { title: 'Pages 1', link: '#' },
        ],
      },
      {
        title: 'Blog',
        link: '#',
        items: [
          { title: 'Blog 1', link: '#' },
          { title: 'Blog 1', link: '#' },
          { title: 'Blog 1', link: '#' },
          { title: 'Blog 1', link: '#' },
        ],
      },
    ],
  },
  hero: [
    {
      img: '/images/hero-slide-0.jpg',
      note: 'Welcome to shopery',
      title: 'Fresh & Healthy Organic Food',
      text: 'Free shipping on all your order. we deliver, you enjoy',
    },
    {
      img: '/images/hero-slide-1.jpg',
      note: 'Welcome to shopery',
      title: 'Nulla facilisi. Donec ex libero',
      text: 'Lorem Ipsum ist ein einfacher Demo-Text für die Print- und Schriftindustrie.',
    },
    {
      img: '/images/hero-slide-2.jpg',
      note: 'Welcome to shopery',
      title: 'Lorem ipsum dolor sit amet',
      text: 'Da ist niemand der den Schmerz an sich liebt, der danach sucht und ihn haben möchte, einfach weil es Schmerz ist...',
    },
  ],
  advantages: [
    {
      icon: 'icon__delivery-truck',
      title: 'Free Shipping',
      text: 'Free shipping with discount',
    },
    {
      icon: 'icon__headphones',
      title: 'Great Support 24/7',
      text: 'Instant access to Contact ',
    },
    {
      icon: 'icon__shopping-bag',
      title: '100% Secure Payment',
      text: 'We ensure your money is save',
    },
    {
      icon: 'icon__package',
      title: 'Money-Back Guarantee',
      text: '30 days money-back guarantee',
    },
  ],

  productTabs: [
    {
      id: 'tab1',
      label: 'All',
      content: [
        {
          href: '#',
          img: '/images/product-apple.jpg',
          title: '1 Green Apple',
          price: '$14.99',
          priceOld: '$20.99',
          rating: 4,
          tags: [
            {
              type: 'red',
              text: 'Sale 50%',
            },
          ],
        },
        {
          href: '#',
          img: '/images/product-mango.jpg',
          title: '1 Surjapur Mango',
          price: '$14.99',
          priceOld: '',
          rating: 4,
        },
        {
          href: '#',
          img: '/images/product-tomatos.jpg',
          title: '1 Red Tomatos',
          price: '$14.99',
          priceOld: '',
          rating: 4,
        },
        {
          href: '#',
          img: '/images/product-cauliflower.jpg',
          title: '1 Fresh Cauliflower',
          price: '$14.99',
          priceOld: '',
          rating: 4,
        },
        {
          href: '#',
          img: '/images/product-letucce.jpg',
          title: '1 Green Lettuce',
          price: '$14.99',
          priceOld: '',
          rating: 4,
        },
        {
          href: '#',
          img: '/images/product-eggplant.jpg',
          title: '1 Eggplant',
          price: '$14.99',
          priceOld: '',
          rating: 4,
        },
        {
          href: '#',
          img: '/images/product-chilli.jpg',
          title: '1 Green Chilli',
          price: '$14.99',
          priceOld: '',
          rating: 4,
        },
        {
          href: '#',
          img: '/images/product-eggplant-dark.jpg',
          title: '1 Eggplant',
          price: '$14.99',
          priceOld: '',
          rating: 4,
        },
      ],
    },
    {
      id: 'tab2',
      label: 'Vegetables',
      content: [
        {
          href: '#',
          img: '/images/product-apple.jpg',
          title: 'Green Apple',
          price: '$14.99',
          priceOld: '$20.99',
          rating: 4,
          tags: [
            {
              type: 'red',
              text: 'Sale 50%',
            },
          ],
        },
        {
          href: '#',
          img: '/images/product-mango.jpg',
          title: 'Surjapur Mango',
          price: '$14.99',
          priceOld: '',
          rating: 4,
        },
        {
          href: '#',
          img: '/images/product-tomatos.jpg',
          title: 'Red Tomatos',
          price: '$14.99',
          priceOld: '',
          rating: 4,
        },
        {
          href: '#',
          img: '/images/product-cauliflower.jpg',
          title: 'Fresh Cauliflower',
          price: '$14.99',
          priceOld: '',
          rating: 4,
        },
        {
          href: '#',
          img: '/images/product-letucce.jpg',
          title: 'Green Lettuce',
          price: '$14.99',
          priceOld: '',
          rating: 4,
        },
        {
          href: '#',
          img: '/images/product-eggplant.jpg',
          title: 'Eggplant',
          price: '$14.99',
          priceOld: '',
          rating: 4,
        },
        {
          href: '#',
          img: '/images/product-chilli.jpg',
          title: 'Green Chilli',
          price: '$14.99',
          priceOld: '',
          rating: 4,
        },
        {
          href: '#',
          img: '/images/product-eggplant-dark.jpg',
          title: 'Eggplant',
          price: '$14.99',
          priceOld: '',
          rating: 4,
        },
      ],
    },
    {
      id: 'tab3',
      label: 'Fruit',
      content: [],
    },
    {
      id: 'tab4',
      label: 'Meat & Fish',
      content: [],
    },
  ],
  products: [
    {
      href: '#',
      img: '/images/product-apple.jpg',
      title: 'Green Apple',
      price: '$14.99',
      priceOld: '$20.99',
      rating: 4,
      tags: [
        {
          type: 'red',
          text: 'Sale 50%',
        },
      ],
    },
    {
      img: '/images/product-mango.jpg',
      title: 'Surjapur Mango',
      price: '$14.99',
      priceOld: '',
      rating: 4,
    },
    {
      href: '#',
      img: '/images/product-tomatos.jpg',
      title: 'Red Tomatos',
      price: '$14.99',
      priceOld: '',
      rating: 4,
    },
    {
      href: '#',
      img: '/images/product-cauliflower.jpg',
      title: 'Fresh Cauliflower',
      price: '$14.99',
      priceOld: '',
      rating: 4,
    },
    {
      href: '#',
      img: '/images/product-letucce.jpg',
      title: 'Green Lettuce',
      price: '$14.99',
      priceOld: '',
      rating: 4,
    },
    {
      href: '#',
      img: '/images/product-eggplant.jpg',
      title: 'Eggplant',
      price: '$14.99',
      priceOld: '',
      rating: 4,
    },
    {
      href: '#',
      img: '/images/product-chilli.jpg',
      title: 'Green Chilli',
      price: '$14.99',
      priceOld: '',
      rating: 4,
    },
    {
      href: '#',
      img: '/images/product-eggplant-dark.jpg',
      title: 'Eggplant',
      price: '$14.99',
      priceOld: '',
      rating: 4,
    },
  ],
  banners: [
    {
      id: '1',
      type: ['left', 'white'],
      background: 'banner-s-1.jpg',
      subtitle: '',
      title: '100% Fresh Cow Milk',
      text: 'Starting at ',
      price: '$14.99',
      link: '#',
    },
    {
      id: '2',
      type: ['right'],
      background: 'banner-s-2.jpg',
      subtitle: 'Drink Sale',
      title: 'Water & Soft Drink',
      text: '',
      price: '',
      link: '#',
    },
    {
      id: '3',
      type: ['left'],
      background: 'banner-s-3.jpg',
      subtitle: '100% Organic',
      title: 'Quick Breakfast',
      text: '',
      price: '',
      link: '#',
    },
  ],
  featuredProducts: [
    {
      href: '#',
      img: '/images/product-apple.jpg',
      title: 'Green Apple',
      price: '$14.99',
      priceOld: '$20.99',
      rating: 4,
      tags: [
        {
          type: 'red',
          text: 'Sale 50%',
        },
      ],
    },
    {
      href: '#',
      img: '/images/product-mango.jpg',
      title: 'Surjapur Mango',
      price: '$14.99',
      priceOld: '',
      rating: 4,
    },
    {
      href: '#',
      img: '/images/product-tomatos.jpg',
      title: 'Red Tomatos',
      price: '$14.99',
      priceOld: '',
      rating: 4,
    },
    {
      href: '#',
      img: '/images/product-cauliflower.jpg',
      title: 'Fresh Cauliflower',
      price: '$14.99',
      priceOld: '',
      rating: 4,
    },
    {
      href: '#',
      img: '/images/product-letucce.jpg',
      title: 'Green Lettuce',
      price: '$14.99',
      priceOld: '',
      rating: 4,
    },
  ],
  reviews: [
    {
      text: '“Aenean et nisl eget eros consectetur vestibulum vel id erat. Aliquam feugiat massa dui. Sed sagittis diam sit amet ante sodales semper. Aliquam commodo lorem laoreet ultricies ele. ”',
      photo: 'review-author--1.jpg',
      name: 'Jenny Wilson',
      role: 'Customer',
    },
    {
      text: '“Proin sed neque nec tellus malesuada ultrices eget a justo. Nullam a nibh faucibus, semper risus ac, ultricies est. Maecenas eget purus in enim imperdiet dapibus in ac mi. Fusce faucibus lacus felis”',
      photo: 'review-author--2.jpg',
      name: 'Guy Hawkins',
      role: 'Customer',
    },
    {
      text: '“Nam sed odio diam. Mauris sagittis sapien sed convallis cursus. Proin mattis ultrices urna ac eleifend. Cras vel nisi nec lectus sagittis venenatis. Curabitur laoreet leo sed lorem pulvina”',
      photo: 'review-author--3.jpg',
      name: 'Kathryn Murphy',
      role: 'Customer',
    },
  ],
  video: {
    preview: 'video-preview.jpg',
    video: 'https://www.youtube.com/embed/2eX2TCfiFuY',
    title: 'We’re the Best Organic Farm in the World',
  },
  news: [
    {
      dateDay: '23',
      dateMonth: 'Jan',
      img: '/images/news-img--1.jpg',
      title: 'Curabitur porttitor orci eget neque accumsan venenatis.',
      text: 'Nulla libero lorem, euismod venenatis nibh sed, sodales dictum ex. Etiam nisi augue, malesuada et pulvinar at, posuere eu neque.',
      link: '#',
    },
    {
      dateDay: '23',
      dateMonth: 'Jan',
      img: '/images/news-img--2.jpg',
      title: 'Curabitur porttitor orci eget neque accumsan venenatis.',
      text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
      link: '#',
    },
    {
      dateDay: '23',
      dateMonth: 'Jan',
      img: '/images/news-img--3.jpg',
      title: 'Curabitur porttitor orci eget neque accumsan venenatis.',
      text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
      link: '#',
    },
  ],
  footer: {
    account: [
      {
        title: 'My Account',
        link: '#',
      },
      {
        title: 'Order History',
        link: '#',
      },
      {
        title: 'Shoping Cart',
        link: '#',
      },
      {
        title: 'Wishlist',
        link: '#',
      },
      {
        title: 'Settings',
        link: '#',
      },
    ],
    helps: [
      {
        title: 'Contact',
        link: '#',
      },
      {
        title: 'Faqs',
        link: '#',
      },
      {
        title: 'Terms & Condition',
        link: '#',
      },
      {
        title: 'Privacy Policy',
        link: '#',
      },
    ],
    proxy: [
      {
        title: 'About',
        link: '#',
      },
      {
        title: 'Shop',
        link: '#',
      },
      {
        title: 'Product',
        link: '#',
      },
      {
        title: 'Products Details',
        link: '#',
      },
      {
        title: 'Track Order',
        link: '#',
      },
    ],
    instagram: [
      {
        img: '/images/instagram--01.jpg',
        link: '#',
      },
      {
        img: '/images/instagram--02.jpg',
        link: '#',
      },
      {
        img: '/images/instagram--03.jpg',
        link: '#',
      },
      {
        img: '/images/instagram--04.jpg',
        link: '#',
      },
      {
        img: '/images/instagram--05.jpg',
        link: '#',
      },
      {
        img: '/images/instagram--06.jpg',
        link: '#',
      },
      {
        img: '/images/instagram--07.jpg',
        link: '#',
      },
      {
        img: '/images/instagram--08.jpg',
        link: '#',
      },
    ],
    socialLinks: [
      {
        icon: 'icon__facebook',
        href: '#',
      },
      {
        icon: 'icon__twitter',
        href: '#',
      },
      {
        icon: 'icon__pinterest',
        href: '#',
      },
      {
        icon: 'icon__instagram',
        href: '#',
      },
    ],
    paymentMethods: [
      {
        icon: 'icon__apple-pay',
      },
      {
        icon: 'icon__visa',
      },
      {
        icon: 'icon__discover',
      },
      {
        icon: 'icon__mastercard',
      },
      {
        icon: 'icon__secure',
      },
    ],
  },
};
