import React from 'react';
import { render } from '@testing-library/react';
import { StarRating } from './StarRating';

describe('StarRating component', () => {
  it('renders correctly', () => {
    const { container } = render(<StarRating value={3} maxValue={5} />);
    expect(container).toMatchSnapshot();
  });

  it('renders correct number of stars', () => {
    const { container } = render(<StarRating value={3} maxValue={5} />);
    const stars = container.querySelectorAll('.star');
    expect(stars.length).toBe(5);
  });

  it('renders correct number of filled stars', () => {
    const { container } = render(<StarRating value={3} maxValue={5} />);
    const filledStars = container.querySelectorAll('.star.filled');
    expect(filledStars.length).toBe(3);
  });

  it('renders correct class names', () => {
    const { container } = render(<StarRating value={3} maxValue={5} className="custom-class" />);
    expect(container.querySelector('.rating')).toBeInTheDocument();
    expect(container.querySelector('.custom-class')).toBeInTheDocument();
    expect(container.querySelector('.star')).toBeInTheDocument();
    expect(container.querySelector('.filled')).toBeInTheDocument();
  });
});
