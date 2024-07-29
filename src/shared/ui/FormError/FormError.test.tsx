import React from 'react';
import { render } from '@testing-library/react';

import { FormError } from './FormError';

describe('FormError component', () => {
  it('renders correctly', () => {
    const text = 'Error message';
    const { container } = render(<FormError text={text} />);
    expect(container).toMatchSnapshot();
  });

  it('renders error text correctly', () => {
    const text = 'Error message';
    const { getByText } = render(<FormError text={text} />);
    const errorText = getByText(text);
    expect(errorText).toBeInTheDocument();
  });

  it('applies custom class correctly', () => {
    const text = 'Error message';
    const customClass = 'custom-error-class';
    const { container } = render(<FormError text={text} className={customClass} />);
    const errorElement = container.querySelector('.custom-error-class');
    expect(errorElement).toBeInTheDocument();
  });
});
