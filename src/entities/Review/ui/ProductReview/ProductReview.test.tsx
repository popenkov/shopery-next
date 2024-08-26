import React from 'react';
import { render } from '@testing-library/react';
import { ProductReview } from './ProductReview';

type TProductReview = {
  text: string;
  photo: string;
  rating: number;
  name: string;
  date: string;
};

const data: TProductReview = {
  text: 'Review text',
  photo: '/photo.jpg',
  rating: 4,
  name: 'John Doe',
  date: '2022-01-01',
};

describe('ProductReview component', () => {
  it('renders author name', () => {
    const { getByText } = render(<ProductReview data={data} />);
    expect(getByText(data.name)).toBeInTheDocument();
  });

  it('renders author photo', () => {
    const { getByAltText } = render(<ProductReview data={data} />);
    expect(getByAltText('avatar')).toBeInTheDocument();
  });

  it('renders rating', () => {
    const { container } = render(<ProductReview data={data} />);
    const filledStars = container.querySelectorAll('.star.filled');

    expect(filledStars).toHaveLength(data.rating!);
  });

  it('renders review text', () => {
    const { getByText } = render(<ProductReview data={data} />);
    expect(getByText(data.text)).toBeInTheDocument();
  });

  it('renders review date', () => {
    const { getByText } = render(<ProductReview data={data} />);
    expect(getByText(data.date)).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const customClassName = 'custom-class';
    const { container } = render(<ProductReview data={data} className={customClassName} />);

    expect(container.querySelector(`.${customClassName}`)).toBeInTheDocument();
  });
});
