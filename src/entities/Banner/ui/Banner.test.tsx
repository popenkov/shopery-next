import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Banner } from './Banner';
import { TBanner } from '../model';

const bannerProps: TBanner = {
  background: 'background-image.jpg',
  variant: ['right', 'left'],
  subtitle: 'Subtitle',
  title: 'Title',
  text: 'Text',
  price: '1',
  id: '1',
  textPosition: 'left',
};

describe('Banner component', () => {
  it('renders correctly', () => {
    const { container } = render(<Banner {...bannerProps} />);
    expect(container).toMatchSnapshot();
  });

  it('renders image with correct background', () => {
    const { container } = render(<Banner {...bannerProps} />);
    const image = container.querySelector('.image');
    expect(image).toHaveStyle(
      `background: center / cover url("/images/${bannerProps.background}")`,
    );
  });

  it('renders subtitle, title and text', () => {
    const { getByText } = render(<Banner {...bannerProps} />);
    expect(getByText(bannerProps.subtitle)).toBeInTheDocument();
    expect(getByText(bannerProps.title!)).toBeInTheDocument();
    expect(getByText(bannerProps.text!)).toBeInTheDocument();
  });

  it('renders button with correct text and icon', () => {
    const { getByTestId, getByRole } = render(<Banner {...bannerProps} />);
    const button = getByRole('button');
    expect(button).toHaveTextContent('Shop Now');
    expect(getByTestId('test-icon')).toBeInTheDocument();
  });

  it('renders with correct variant classes', () => {
    const { container } = render(<Banner {...bannerProps} />);

    const banner = container.querySelector('.banner');
    expect(banner).toHaveClass('right');
    expect(banner).toHaveClass('left');
  });

  it('renders with correct text position class', () => {
    const { container } = render(<Banner {...bannerProps} textPosition="right" />);
    const banner = container.querySelector('.banner');
    expect(banner).toHaveClass('right');
  });

  it('renders link with correct href', () => {
    const { getByRole } = render(<Banner {...bannerProps} />);
    const link = getByRole('link');
    expect(link).toHaveAttribute('href', '#');
  });
});
