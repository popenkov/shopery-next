import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Dropdown } from './Dropdown';

describe('Dropdown', () => {
  const data = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  it('renders the dropdown with the correct class names', () => {
    const { getByText } = render(<Dropdown data={data} onChange={() => {}} />);

    const button = getByText('Option 1');

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('dropdownButton');
  });

  it('displays the correct dropdown items when clicked', () => {
    const { getByText, queryByText } = render(<Dropdown data={data} onChange={() => {}} />);

    const button = getByText('Option 1');
    fireEvent.mouseOver(button);

    data.forEach((item) => {
      expect(getByText(item.label)).toBeInTheDocument();
    });

    data.forEach((item) => {
      expect(queryByText(item.label)).not.toBeNull();
    });
  });

  it('calls the onChange function with the correct value when clicked', () => {
    const handleChange = jest.fn();

    const { getByText } = render(<Dropdown data={data} onChange={handleChange} />);

    const button = getByText('Option 1');
    fireEvent.mouseOver(button);

    const optionButton = getByText('Option 2');
    fireEvent.click(optionButton);

    expect(handleChange).toHaveBeenCalledWith(data[1]);
  });
});
