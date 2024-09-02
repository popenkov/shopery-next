import React from 'react';
import { render } from '@testing-library/react';

import { PhoneLink } from './PhoneLink';

const phone = '+1234567890';
const href = '1234567890';
describe('PhoneLink component', () => {
  it('renders correctly', () => {
    const { container } = render(<PhoneLink phone={phone} href={href} />);
    expect(container).toMatchSnapshot();
  });

  it('renders PhoneIcon correctly', () => {
    const { getByTestId } = render(<PhoneLink phone={phone} href={href} />);
    const icon = getByTestId('test-icon');

    expect(icon).toBeInTheDocument();
  });

  it('renders phone number correctly', () => {
    const { getByText } = render(<PhoneLink phone={phone} href={href} />);
    expect(getByText(phone)).toBeInTheDocument();
  });

  it('renders anchor tag with correct href', () => {
    const { getByRole } = render(<PhoneLink phone={phone} href={href} />);
    const anchor = getByRole('link');
    expect(anchor).toHaveAttribute('href', `tel:${href}`);
  });
});
