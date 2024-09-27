import React from 'react';
import { render } from '@testing-library/react';

import { TTagVariant } from '../model';

import { Tag } from './Tag';

describe('Tag component', () => {
  it('renders correctly', () => {
    const { container } = render(<Tag variant="sale">Sale</Tag>);
    expect(container).toMatchSnapshot();
  });

  it('renders correct class names', () => {
    const { container } = render(<Tag variant="sale">Sale</Tag>);
    expect(container.querySelector('.tag')).toBeInTheDocument();
    expect(container.querySelector('.sale')).toBeInTheDocument();
  });

  it('renders correct text', () => {
    const { getByText } = render(<Tag variant="sale">Sale</Tag>);
    expect(getByText('Sale')).toBeInTheDocument();
  });

  it('renders correct variant classes', () => {
    const variants = ['sale', 'not-available', 'best-sale', 'new', 'out-of-stock', 'in-stock'];
    variants.forEach((variant) => {
      const { container } = render(<Tag variant={variant as TTagVariant}>{variant}</Tag>);
      expect(container.querySelector(`.${variant}`)).toBeInTheDocument();
    });
  });

  it('renders as span element', () => {
    const { container } = render(<Tag variant="sale">Sale</Tag>);
    expect(container.querySelector('span')).toBeInTheDocument();
  });
});
