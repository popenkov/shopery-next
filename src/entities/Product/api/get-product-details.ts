import { type TProductDetailed } from '..';

const data: TProductDetailed = {
  id: 'test',
  sliderImages: {
    thumb: [
      '/images/preview-image.jpg',
      '/images/preview-image.jpg',
      '/images/preview-image.jpg',
      '/images/preview-image.jpg',
      '/images/preview-image.jpg',
      '/images/preview-image.jpg',
      '/images/preview-image.jpg',
      '/images/preview-image.jpg',
    ],
    main: [
      '/images/preview-image.jpg',
      '/images/preview-image.jpg',
      '/images/preview-image.jpg',
      '/images/preview-image.jpg',
      '/images/preview-image.jpg',
      '/images/preview-image.jpg',
      '/images/preview-image.jpg',
      '/images/preview-image.jpg',
    ],
  },
  title: 'Chinese Cabbage',
  price: 14.99,
  priceOld: 17.28,
  priceTags: [
    {
      type: 'red',
      text: '64% Off',
    },
  ],
  rating: 4,
  tags: [
    {
      type: 'in-stock',
      text: 'In Stock',
    },
  ],
  reviews: {
    amount: 4,
    path: '#',
  },
  sku: '2,51,594',
  brandLogo: 'brand-farmary.svg',
  description:
    'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. ',
  categories: [{ title: 'Vegetables', path: '#' }],
  categoryTags: [
    { title: 'Vegetables', path: '#' },
    { title: 'Healthy', path: '#' },
    { title: 'Chinese', path: '#' },
    { title: 'Cabbage', path: '#' },
    { title: 'Green Cabbage', path: '#' },
  ],
  descriptions:
    '<p> Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin. Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed et condimentum arcu, id molestie tellus. Nulla facilisi. Nam scelerisque vitae justo a convallis. Morbi urna ipsum, placerat quis commodo quis, egestas elementum leo. Donec convallis mollis enim. Aliquam id mi quam. Phasellus nec fringilla elit.</p> <p>  Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed iaculis, metus faucibus elementum tincidunt, turpis mi viverra velit, pellentesque tristique neque mi eget nulla. Proin luctus elementum neque et pharetra. </p> <ul>  <li> 100 g of fresh leaves provides. </li> <li> Aliquam ac est at augue volutpat elementum. </li> <li> Quisque nec enim eget sapien molestie. </li> <li> Proin convallis odio volutpat finibus posuere.  </li>  </ul>  <p>  Cras et diam maximus, accumsan  sapien et, sollicitudin velit. Nulla  blandit eros non turpis lobortis iaculis at ut massa.  </p>',
  specs: [
    { title: 'Weight', value: [{ title: '03', path: '#' }] },
    { title: 'Color', value: [{ title: 'Green', path: '/' }] },
    { title: 'Type', value: [{ title: 'Organic', path: '/' }] },
    {
      title: 'Category',
      value: [{ title: 'Vegetables', path: '/' }],
    },
    {
      title: 'Stock Status',
      value: [{ title: 'Available (5,413)', path: '#' }],
    },
    {
      title: 'Tags',
      value: [
        { title: 'Vegetables', path: '/' },
        { title: 'Healthy', path: '/' },

        { title: 'Chinese', path: '/' },

        { title: 'Cabbage', path: '/' },

        { title: ' Green Cabbage,', path: '/' },
      ],
    },
  ],
  feedback: [
    {
      name: 'Kristin Watson',
      photo: '/images/review-author--1.jpg',
      rating: 5,
      text: 'Duis at ullamcorper nulla, eu dictum eros.',
      date: '2 min ago',
    },
    {
      name: 'Jane Cooper',
      photo: '/images/review-author--3.jpg',
      rating: 4,
      text: 'Keep the soil evenly moist for the healthiest growth. If the sun gets too hot, Chinese cabbage tends to "bolt" or go to seed; in long periods of heat, some kind of shade may be helpful. Watch out for snails, as they will harm the plants.',
      date: '30 Apr, 2021',
    },
    {
      name: 'Jacob Jones',
      photo: '/images/review-author--2.jpg',
      rating: 5,
      text: ' Vivamus eget euismod magna. Nam sed lacinia nibh, et lacinia lacus.',
      date: '2 min ago',
    },
    {
      name: 'Ralph Edwards',
      photo: '/images/review-author--3.jpg',
      rating: 5,
      text: "200+ Canton Pak Choi Bok Choy Chinese Cabbage Seeds Heirloom Non-GMO Productive Brassica rapa VAR. chinensis, a.k.a. Canton's Choice, Bok Choi, from USA",
      date: '2 min ago',
    },
    {
      name: 'Jane Cooper',
      photo: '/images/review-author--1.jpg',
      rating: 4,
      text: 'Keep the soil evenly moist for the healthiest growth. If the sun gets too hot, Chinese cabbage tends to "bolt" or go to seed; in long periods of heat, some kind of shade may be helpful. Watch out for snails, as they will harm the plants.',
      date: '30 Apr, 2021',
    },
    {
      name: 'Jacob Jones',
      photo: '/images/review-author--2.jpg',
      rating: 5,
      text: ' Vivamus eget euismod magna. Nam sed lacinia nibh, et lacinia lacus.',
      date: '2 min ago',
    },
    {
      name: 'Jane Cooper',
      photo: '/images/review-author--1.jpg',
      rating: 4,
      text: 'Keep the soil evenly moist for the healthiest growth. If the sun gets too hot, Chinese cabbage tends to "bolt" or go to seed; in long periods of heat, some kind of shade may be helpful. Watch out for snails, as they will harm the plants.',
      date: '30 Apr, 2021',
    },
    {
      name: 'Jacob Jones',
      photo: '/images/review-author--2.jpg',
      rating: 5,
      text: ' Vivamus eget euismod magna. Nam sed lacinia nibh, et lacinia lacus.',
      date: '2 min ago',
    },
  ],
  ad: {
    video: {
      background: 'tab-video-preview.jpg',
      src: 'https://www.youtube.com/embed/2eX2TCfiFuY',
    },
    advantages: [
      {
        icon: 'PriceTagIcon',
        title: '64% Discount',
        text: 'Save your 64% money with us',
      },
      {
        icon: 'LeafIcon',
        title: '100% Organic',
        text: '100% Organic Vegetables',
      },
    ],
  },
  relatedProducts: [
    {
      id: '4',
      path: '#',
      img: '/images/product-apple.jpg',
      title: 'Green Apple',
      price: 14.99,
      priceOld: 20.99,
      rating: 4,
      tags: [
        {
          type: 'sale',
          text: 'Sale 50%',
        },
      ],
    },
    {
      id: '1',
      path: '#',
      img: '/images/product-mango.jpg',
      title: 'Surjapur Mango',
      price: 14.99,

      rating: 4,
    },
    {
      id: '2',
      path: '#',
      img: '/images/product-tomatos.jpg',
      title: 'Red Tomatos',
      price: 14.99,

      rating: 4,
    },
    {
      id: '3',
      path: '#',
      img: '/images/product-cauliflower.jpg',
      title: 'Fresh Cauliflower',
      price: 14.99,

      rating: 4,
    },
  ],
};

export const getProductDetails = () => {
  return data;
};
