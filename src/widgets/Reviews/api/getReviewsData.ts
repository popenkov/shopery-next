import { nanoid } from 'nanoid';

const data = [
    {
        id: nanoid(),
        text: '“Aenean et nisl eget eros consectetur vestibulum vel id erat. Aliquam feugiat massa dui. Sed sagittis diam sit amet ante sodales semper. Aliquam commodo lorem laoreet ultricies ele. ”',
        photo: '/images/review-author--1.jpg',
        name: 'Jenny Wilson',
        role: 'Customer',
    },
    {
        id: nanoid(),
        text: '“Proin sed neque nec tellus malesuada ultrices eget a justo. Nullam a nibh faucibus, semper risus ac, ultricies est. Maecenas eget purus in enim imperdiet dapibus in ac mi. Fusce faucibus lacus felis”',
        photo: '/images/review-author--2.jpg',
        name: 'Guy Hawkins',
        role: 'Customer',
    },
    {
        id: nanoid(),
        text: '“Nam sed odio diam. Mauris sagittis sapien sed convallis cursus. Proin mattis ultrices urna ac eleifend. Cras vel nisi nec lectus sagittis venenatis. Curabitur laoreet leo sed lorem pulvina”',
        photo: '/images/review-author--3.jpg',
        name: 'Kathryn Murphy',
        role: 'Customer',
    },
];

export const getReviewsData = () => {
    return {
        reviews: data,
    };
};
