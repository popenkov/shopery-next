import React from 'react';
import { render, fireEvent, waitFor, within } from '@testing-library/react';

import { AppSelect } from './AppSelect';

describe('AppSelect', () => {
  it('renders the select with the correct options', async () => {
    const options = [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ];

    const { getByText } = render(<AppSelect options={options} menuIsOpen />);

    options.forEach(async (option) => {
      await waitFor(() => expect(getByText(option.label)).toBeInTheDocument());
    });
  });

  it('calls the onChange function when an option is selected', async () => {
    const options = [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ];

    const handleChange = jest.fn();

    const { container } = render(
      <AppSelect options={options} onChange={handleChange} menuIsOpen />,
    );

    const list = container.querySelector('.react-select__menu') as HTMLElement;

    const option = within(list).getByText('Option 1') as Element;

    fireEvent.click(option);
    await waitFor(() => expect(handleChange).toHaveBeenCalledWith('option1'));
  });
});
