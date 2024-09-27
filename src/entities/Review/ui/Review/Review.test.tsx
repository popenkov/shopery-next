import React from 'react';
import { render } from '@testing-library/react';

import { Review } from './Review';

const text = 'Review text';
const photo = '/photo.jpg';
const name = 'John Doe';
const role = 'CEO';

describe('Review component', () => {
  it('renders quote icon', () => {
    const { getByTestId } = render(<Review text={text} photo={photo} name={name} role={role} />);
    expect(getByTestId('test-icon')).toBeInTheDocument();
  });

  it('renders author photo', () => {
    const { getByAltText } = render(<Review text={text} photo={photo} name={name} role={role} />);
    expect(getByAltText('author')).toBeInTheDocument();
  });

  it('renders author name', () => {
    const { getByText } = render(<Review text={text} photo={photo} name={name} role={role} />);
    expect(getByText(name)).toBeInTheDocument();
  });

  it('renders author role', () => {
    const { getByText } = render(<Review text={text} photo={photo} name={name} role={role} />);
    expect(getByText(role)).toBeInTheDocument();
  });
});
