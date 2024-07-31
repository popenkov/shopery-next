import React from 'react';
import { render, fireEvent, waitFor, within } from '@testing-library/react';

import { CHANGE_CURRENCY_DATA } from '@/features/CurrencySwitcher/ui/constants';

import { Dropdown } from './Dropdown';

describe('Dropdown', () => {
  it('renders the dropdown with the correct class names', () => {
    const { getByTestId } = render(<Dropdown data={CHANGE_CURRENCY_DATA} onChange={() => {}} />);

    const button = getByTestId('dropdownButton');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('dropdownButton');
  });

  it('displays the correct dropdown items when clicked', () => {
    const { getByText, queryByText, getByTestId } = render(
      <Dropdown data={CHANGE_CURRENCY_DATA} onChange={() => {}} />,
    );

    const button = getByTestId('dropdownButton');
    fireEvent.mouseOver(button);

    CHANGE_CURRENCY_DATA.forEach(async (item) => {
      await waitFor(() => expect(getByText(item.label)).toBeInTheDocument());
    });

    CHANGE_CURRENCY_DATA.forEach(async (item) => {
      await waitFor(() => expect(queryByText(item.label)).not.toBeNull());
    });
  });

  it('calls the onChange function with the correct value when clicked', () => {
    const handleChange = jest.fn();

    const { getByText, getByTestId, getByRole } = render(
      <Dropdown data={CHANGE_CURRENCY_DATA} onChange={handleChange} />,
    );

    const button = getByTestId('dropdownButton');
    fireEvent.mouseOver(button);

    const listItem = getByRole('list');
    const optionButton = within(listItem).getByText('USD');
    fireEvent.click(optionButton);

    expect(handleChange).toHaveBeenCalledWith(CHANGE_CURRENCY_DATA[0]);
  });
});
