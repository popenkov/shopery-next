import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders the button with the correct class names', () => {
    const { getByText } = render(
      <Button theme="primary" size="normal">
        Test Button
      </Button>
    );

    const button = getByText('Test Button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('button primary normal');
  });

  it('calls the onClick function when clicked', () => {
    const handleClick = jest.fn();

    const { getByText } = render(
      <Button theme="primary" size="normal" onClick={handleClick}>
        Test Button
      </Button>
    );

    const button = getByText('Test Button');

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
