import React from 'react';
import { render } from '@testing-library/react';
import { UserAddress } from './UserAddress';
import { getUserAddress } from '../../api';

jest.mock('../../api', () => ({
  getUserAddress: jest.fn(() => ({
    street: '123 Main St',
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '123-456-7890',
  })),
}));

describe('UserAddress component', () => {
  it('renders correctly', () => {
    const actions = <button>Actions</button>;
    const { getByText } = render(<UserAddress actions={actions} />);
    expect(getByText('Billing Address')).toBeInTheDocument();
    expect(getByText('John Doe')).toBeInTheDocument();
    expect(getByText('123 Main St')).toBeInTheDocument();
    expect(getByText('johndoe@example.com')).toBeInTheDocument();
    expect(getByText('123-456-7890')).toBeInTheDocument();
    expect(getByText('Actions')).toBeInTheDocument();
  });

  it('calls getUserAddress on render', () => {
    render(<UserAddress actions={<button>Actions</button>} />);
    expect(getUserAddress).toHaveBeenCalledTimes(1);
  });

  it('renders with custom className', () => {
    const customClassName = 'custom-class';
    const { container } = render(
      <UserAddress actions={<button>Actions</button>} className="custom-class" />,
    );

    expect(container.querySelector(`.${customClassName}`)).toBeInTheDocument();
  });
});
