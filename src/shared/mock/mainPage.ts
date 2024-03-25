import { MainPageData } from '../interfaces/main-page';

export const MAIN_PAGE_DATA: MainPageData = {
  header: {
    categories: [
      {
        slug: '#',
        icon: 'icon__apple',
        title: 'Fresh Fruit',
      },
      {
        slug: '#',
        icon: 'icon__salad',
        title: 'Vegetables',
      },
      { slug: '#', icon: 'icon__fish', title: 'River Fish' },
      { slug: '#', icon: 'icon__coffee', title: 'Drink & Water' },
      { slug: '#', icon: 'icon__ice_cream', title: 'Yogurt & Ice Cream' },
      {
        slug: '#',
        icon: 'icon__cupcake',
        title: 'Cake & Bread',
      },
      { slug: '#', icon: 'icon__pie', title: 'Butter & Cream' },
      { slug: '#', icon: 'icon__food', title: 'Cooking' },
    ],
    navigation: [
      {
        title: 'Home',
        slug: '#',
        items: [
          { title: 'Home 1', slug: '#' },
          { title: 'Home 1', slug: '#' },
          { title: 'Home 1', slug: '#' },
          { title: 'Home 1', slug: '#' },
        ],
      },
      {
        title: 'Shop',
        slug: '#',
        items: [
          { title: 'Shop 1', slug: '#' },
          { title: 'Shop 1', slug: '#' },
          { title: 'Shop 1', slug: '#' },
          { title: 'Shop 1', slug: '#' },
        ],
      },
      {
        title: 'Pages',
        slug: '#',
        items: [
          { title: 'Pages 1', slug: '#' },
          { title: 'Pages 1', slug: '#' },
          { title: 'Pages 1', slug: '#' },
          { title: 'Pages 1', slug: '#' },
        ],
      },
      {
        title: 'Blog',
        slug: '#',
        items: [
          { title: 'Blog 1', slug: '#' },
          { title: 'Blog 1', slug: '#' },
          { title: 'Blog 1', slug: '#' },
          { title: 'Blog 1', slug: '#' },
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
          slug: '#',
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
          slug: '#',
          img: '/images/product-mango.jpg',
          title: '1 Surjapur Mango',
          price: '$14.99',
          priceOld: '',
          rating: 4,
        },
        {
          slug: '#',
          img: '/images/product-tomatos.jpg',
          title: '1 Red Tomatos',
          price: '$14.99',
          priceOld: '',
          rating: 4,
        },
        {
          slug: '#',
          img: '/images/product-cauliflower.jpg',
          title: '1 Fresh Cauliflower',
          price: '$14.99',
          priceOld: '',
          rating: 4,
        },
        {
          slug: '#',
          img: '/images/product-letucce.jpg',
          title: '1 Green Lettuce',
          price: '$14.99',
          priceOld: '',
          rating: 4,
        },
        {
          slug: '#',
          img: '/images/product-eggplant.jpg',
          title: '1 Eggplant',
          price: '$14.99',
          priceOld: '',
          rating: 4,
        },
        {
          slug: '#',
          img: '/images/product-chilli.jpg',
          title: '1 Green Chilli',
          price: '$14.99',
          priceOld: '',
          rating: 4,
        },
        {
          slug: '#',
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
          slug: '#',
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
          slug: '#',
          img: '/images/product-mango.jpg',
          title: 'Surjapur Mango',
          price: '$14.99',
          priceOld: '',
          rating: 4,
        },
        {
          slug: '#',
          img: '/images/product-tomatos.jpg',
          title: 'Red Tomatos',
          price: '$14.99',
          priceOld: '',
          rating: 4,
        },
        {
          slug: '#',
          img: '/images/product-cauliflower.jpg',
          title: 'Fresh Cauliflower',
          price: '$14.99',
          priceOld: '',
          rating: 4,
        },
        {
          slug: '#',
          img: '/images/product-letucce.jpg',
          title: 'Green Lettuce',
          price: '$14.99',
          priceOld: '',
          rating: 4,
        },
        {
          slug: '#',
          img: '/images/product-eggplant.jpg',
          title: 'Eggplant',
          price: '$14.99',
          priceOld: '',
          rating: 4,
        },
        {
          slug: '#',
          img: '/images/product-chilli.jpg',
          title: 'Green Chilli',
          price: '$14.99',
          priceOld: '',
          rating: 4,
        },
        {
          slug: '#',
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
      slug: '#',
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
      slug: '#',
      img: '/images/product-tomatos.jpg',
      title: 'Red Tomatos',
      price: '$14.99',
      priceOld: '',
      rating: 4,
    },
    {
      slug: '#',
      img: '/images/product-cauliflower.jpg',
      title: 'Fresh Cauliflower',
      price: '$14.99',
      priceOld: '',
      rating: 4,
    },
    {
      slug: '#',
      img: '/images/product-letucce.jpg',
      title: 'Green Lettuce',
      price: '$14.99',
      priceOld: '',
      rating: 4,
    },
    {
      slug: '#',
      img: '/images/product-eggplant.jpg',
      title: 'Eggplant',
      price: '$14.99',
      priceOld: '',
      rating: 4,
    },
    {
      slug: '#',
      img: '/images/product-chilli.jpg',
      title: 'Green Chilli',
      price: '$14.99',
      priceOld: '',
      rating: 4,
    },
    {
      slug: '#',
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
      slug: '#',
    },
    {
      id: '2',
      type: ['right'],
      background: 'banner-s-2.jpg',
      subtitle: 'Drink Sale',
      title: 'Water & Soft Drink',
      text: '',
      price: '',
      slug: '#',
    },
    {
      id: '3',
      type: ['left'],
      background: 'banner-s-3.jpg',
      subtitle: '100% Organic',
      title: 'Quick Breakfast',
      text: '',
      price: '',
      slug: '#',
    },
  ],
  featuredProducts: [
    {
      slug: '#',
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
      slug: '#',
      img: '/images/product-mango.jpg',
      title: 'Surjapur Mango',
      price: '$14.99',
      priceOld: '',
      rating: 4,
    },
    {
      slug: '#',
      img: '/images/product-tomatos.jpg',
      title: 'Red Tomatos',
      price: '$14.99',
      priceOld: '',
      rating: 4,
    },
    {
      slug: '#',
      img: '/images/product-cauliflower.jpg',
      title: 'Fresh Cauliflower',
      price: '$14.99',
      priceOld: '',
      rating: 4,
    },
    {
      slug: '#',
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
      slug: '#',
    },
    {
      dateDay: '23',
      dateMonth: 'Jan',
      img: '/images/news-img--2.jpg',
      title: 'Curabitur porttitor orci eget neque accumsan venenatis.',
      text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
      slug: '#',
    },
    {
      dateDay: '23',
      dateMonth: 'Jan',
      img: '/images/news-img--3.jpg',
      title: 'Curabitur porttitor orci eget neque accumsan venenatis.',
      text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
      slug: '#',
    },
  ],
  footer: {
    account: [
      {
        title: 'My Account',
        slug: '#',
      },
      {
        title: 'Order History',
        slug: '#',
      },
      {
        title: 'Shoping Cart',
        slug: '#',
      },
      {
        title: 'Wishlist',
        slug: '#',
      },
      {
        title: 'Settings',
        slug: '#',
      },
    ],
    helps: [
      {
        title: 'Contact',
        slug: '#',
      },
      {
        title: 'Faqs',
        slug: '#',
      },
      {
        title: 'Terms & Condition',
        slug: '#',
      },
      {
        title: 'Privacy Policy',
        slug: '#',
      },
    ],
    proxy: [
      {
        title: 'About',
        slug: '#',
      },
      {
        title: 'Shop',
        slug: '#',
      },
      {
        title: 'Product',
        slug: '#',
      },
      {
        title: 'Products Details',
        slug: '#',
      },
      {
        title: 'Track Order',
        slug: '#',
      },
    ],
    instagram: [
      {
        img: '/images/instagram--01.jpg',
        slug: '#',
      },
      {
        img: '/images/instagram--02.jpg',
        slug: '#',
      },
      {
        img: '/images/instagram--03.jpg',
        slug: '#',
      },
      {
        img: '/images/instagram--04.jpg',
        slug: '#',
      },
      {
        img: '/images/instagram--05.jpg',
        slug: '#',
      },
      {
        img: '/images/instagram--06.jpg',
        slug: '#',
      },
      {
        img: '/images/instagram--07.jpg',
        slug: '#',
      },
      {
        img: '/images/instagram--08.jpg',
        slug: '#',
      },
    ],
    socialLinks: [
      {
        icon: 'icon__facebook',
        slug: '#',
      },
      {
        icon: 'icon__twitter',
        slug: '#',
      },
      {
        icon: 'icon__pinterest',
        slug: '#',
      },
      {
        icon: 'icon__instagram',
        slug: '#',
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
