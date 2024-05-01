const data = {
    id: 'test',
    img: 'product-big-potatos.jpg',
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
        href: '#',
    },
    sku: '2,51,594',
    brandLogo: 'brand-farmary.svg',
    description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. ',
    categories: [{ title: 'Vegetables', href: '#' }],
    categoryTags: [
        { title: 'Vegetables', href: '#' },
        { title: 'Healthy', href: '#' },
        { title: 'Chinese', href: '#' },
        { title: 'Cabbage', href: '#' },
        { title: 'Green Cabbage', href: '#' },
    ],
};

export const getProductDetails = () => {
    return data;
};
