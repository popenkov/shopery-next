import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { HeroSlide } from './HeroSlide';
import { THeroSlide } from '..';

const heroSlideProps: THeroSlide = {
  id: '1',
  path: '/hero-slide',
  image: '/images/hero-slide.jpg',
  note: 'New Arrivals',
  title: 'Hero Slide Title',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
};

const nextJSImageSrc = '/_next/image?url=%2Fimages%2Fhero-slide.jpg&w=3840&q=75';

describe('HeroSlide component', () => {
  it('renders correctly', () => {
    const { container } = render(<HeroSlide {...heroSlideProps} />);
    expect(container).toMatchSnapshot();
  });

  it('renders image with correct src and alt', () => {
    const { getByAltText } = render(<HeroSlide {...heroSlideProps} />);
    const image = getByAltText(heroSlideProps.title);
    expect(image).toHaveAttribute('src', nextJSImageSrc);
  });

  it('renders note, title, and text', () => {
    const { getByText } = render(<HeroSlide {...heroSlideProps} />);
    expect(getByText(heroSlideProps.note)).toBeInTheDocument();
    expect(getByText(heroSlideProps.title)).toBeInTheDocument();
    expect(getByText(heroSlideProps.text)).toBeInTheDocument();
  });

  it('renders link with correct href and text', () => {
    const { getByText, getByRole } = render(<HeroSlide {...heroSlideProps} />);
    const link = getByRole('link');
    expect(link).toHaveAttribute('href', heroSlideProps.path);
    expect(getByText('Shop now')).toBeInTheDocument();
  });
});
