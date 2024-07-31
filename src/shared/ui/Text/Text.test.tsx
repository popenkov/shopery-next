import React from 'react';
import { render } from '@testing-library/react';

import { Text } from './Text';

describe('Text component', () => {
  it('renders correctly', () => {
    const { container } = render(<Text>Text content</Text>);
    expect(container).toMatchSnapshot();
  });

  it('renders correct class names', () => {
    const { container } = render(
      <Text theme="primary" variant="body_m" align="left" weight="regular">
        Text content
      </Text>,
    );
    expect(container.querySelector('.text')).toBeInTheDocument();
    expect(container.querySelector('.primary')).toBeInTheDocument();
    expect(container.querySelector('.body_m')).toBeInTheDocument();
    expect(container.querySelector('.left')).toBeInTheDocument();
    expect(container.querySelector('.regular')).toBeInTheDocument();
  });

  it('renders correct text', () => {
    const { getByText } = render(<Text>Text content</Text>);
    expect(getByText('Text content')).toBeInTheDocument();
  });

  it('renders correct element type', () => {
    const { container } = render(<Text as="span">Text content</Text>);
    expect(container.querySelector('span')).toBeInTheDocument();
  });

  it('renders correct href attribute', () => {
    const { container } = render(
      <Text href="https://example.com" as="a">
        Text content
      </Text>,
    );
    expect(container.querySelector('a')).toHaveAttribute('href', 'https://example.com');
  });

  it('renders correct title attribute', () => {
    const { container } = render(<Text title="Title">Text content</Text>);
    expect(container.querySelector('p')).toHaveAttribute('title', 'Title');
  });
});
