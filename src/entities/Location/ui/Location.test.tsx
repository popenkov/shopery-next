import React from 'react';
import { render } from '@testing-library/react';
import { Location } from './Location';

describe('Location component', () => {
  it('renders correctly', () => {
    const address = '123 Main St';
    const { container } = render(<Location address={address} />);

    expect(container).toMatchSnapshot();
  });

  it('renders with correct class names', () => {
    const address = '123 Main St';
    const { getByTestId } = render(<Location address={address} />);
    const location = getByTestId('HeaderTop.location');

    expect(location).toHaveClass('location');
  });

  it('renders with mobile class when isMobile is true', () => {
    const address = '123 Main St';
    const { getByTestId } = render(<Location address={address} isMobile />);
    const location = getByTestId('HeaderTop.location');

    expect(location).toHaveClass('mobile');
  });

  it('renders MapPinIcon', () => {
    const address = '123 Main St';
    const { getByTestId } = render(<Location address={address} />);
    const icon = getByTestId('test-icon');
    expect(icon).toBeInTheDocument();
  });

  it('renders address text', () => {
    const address = '123 Main St';
    const { getByText } = render(<Location address={address} />);
    expect(getByText(address)).toBeInTheDocument();
  });

  it('renders with correct data-testid', () => {
    const address = '123 Main St';
    const { getByTestId } = render(<Location address={address} />);
    expect(getByTestId('HeaderTop.location')).toBeInTheDocument();
  });
});
