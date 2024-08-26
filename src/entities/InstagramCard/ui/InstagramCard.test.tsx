import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { InstagramCard } from './InstagramCard';
import { TInstagramCard } from '..';

const instagramCardProps: TInstagramCard = {
  id: '1',
  img: '/images/instagram.jpg',
  path: 'example',
};

const nextJSImageSrc = '/_next/image?url=%2Fimages%2Finstagram.jpg&w=3840&q=75';
describe('InstagramCard component', () => {
  it('renders correctly', () => {
    const { container } = render(<InstagramCard {...instagramCardProps} />);
    expect(container).toMatchSnapshot();
  });

  it('renders image with correct src and alt', () => {
    const { getByAltText } = render(<InstagramCard {...instagramCardProps} />);
    const image = getByAltText(instagramCardProps.path);
    expect(image).toHaveAttribute('src', nextJSImageSrc);
  });

  it('renders Instagram icon', () => {
    const { getByRole } = render(<InstagramCard {...instagramCardProps} />);
    const icon = getByRole('img', { name: instagramCardProps.path });
    expect(icon).toBeInTheDocument();
  });

  it('renders link with correct href', () => {
    const { getByRole } = render(<InstagramCard {...instagramCardProps} />);
    const link = getByRole('link');
    expect(link).toHaveAttribute('href', `instagram.com/${instagramCardProps.path}`);
  });
});
