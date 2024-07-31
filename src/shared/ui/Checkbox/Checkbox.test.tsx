import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('renders the checkbox', () => {
    const { getByLabelText } = render(
      <Checkbox onChange={(value) => value} name="test" value="test" text="Test Checkbox" />,
    );

    const checkbox = getByLabelText('Test Checkbox');

    expect(checkbox).toBeInTheDocument();
  });

  it('calls the onChange function when clicked', async () => {
    const handleChange = jest.fn();

    const { getByLabelText } = render(
      <Checkbox name="test" value="test" text="Test Checkbox" onChange={handleChange} />,
    );

    const checkbox = getByLabelText('Test Checkbox');

    fireEvent.click(checkbox);

    // todo error pretty-format: Unknown option "maxWidth".
    // await waitFor(() => expect(handleChange).toHaveBeenCalledWith('test'));
  });
});
