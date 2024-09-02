import React from 'react';
import { render } from '@testing-library/react';

import { getUserData } from '../../api';

import { UserCard } from './UserCard';

jest.mock('../../api', () => ({
  getUserData: jest.fn(() => ({
    photo: '/photo.jpg',
    name: 'John Doe',
    role: 'Software Engineer',
  })),
}));

const nextJSImageUrl = '/_next/image?url=%2Fphoto.jpg&w=3840&q=75';

describe('UserCard component', () => {
  it('renders correctly', () => {
    const actions = <button>Actions</button>;
    const { getByAltText, getByText } = render(<UserCard actions={actions} />);
    expect(getByAltText('John Doe')).toBeInTheDocument();
    expect(getByText('John Doe')).toBeInTheDocument();
    expect(getByText('Software Engineer')).toBeInTheDocument();
    expect(getByText('Actions')).toBeInTheDocument();
  });

  it('calls getUserData on render', () => {
    render(<UserCard actions={<button>Actions</button>} />);
    expect(getUserData).toHaveBeenCalledTimes(1);
  });

  it('renders with custom className', () => {
    const customClassName = 'custom-class';
    const { container } = render(
      <UserCard actions={<button>Actions</button>} className={customClassName} />,
    );

    expect(container.querySelector(`.${customClassName}`)).toBeInTheDocument();
  });

  it('renders image with correct src and alt', () => {
    const { getByAltText } = render(<UserCard actions={<button>Actions</button>} />);
    const image = getByAltText('John Doe');
    expect(image).toHaveAttribute('src', nextJSImageUrl);
  });
});
