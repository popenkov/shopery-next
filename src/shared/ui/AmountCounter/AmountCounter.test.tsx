import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { AmountCounter } from './AmountCounter';

describe('AmountCounter component', () => {
  it('renders correctly', () => {
    const { container } = render(<AmountCounter value={1} onChange={() => {}} />);
    expect(container).toMatchSnapshot();
  });

  it('displays the initial value', () => {
    const value = 5;
    const { getByTestId } = render(<AmountCounter value={value} onChange={() => {}} />);
    const input = getByTestId('AmountCounter.input');
    expect(input).toHaveValue(value);
  });

  it('calls onChange when the plus button is clicked', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(<AmountCounter value={1} onChange={onChange} />);
    const plusButton = getByTestId('AmountCounter.plusButton');
    fireEvent.click(plusButton);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(2);
  });

  it('calls onChange when the minus button is clicked', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(<AmountCounter value={2} onChange={onChange} />);
    const minusButton = getByTestId('AmountCounter.minusButton');
    fireEvent.click(minusButton);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(1);
  });

  it('does not call onChange when the minus button is clicked and the value is 1', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(<AmountCounter value={1} onChange={onChange} />);
    const minusButton = getByTestId('AmountCounter.minusButton');
    fireEvent.click(minusButton);
    expect(onChange).not.toHaveBeenCalled();
  });

  it('updates the input value when the plus button is clicked', () => {
    const { getByTestId } = render(<AmountCounter value={1} onChange={() => {}} />);
    const plusButton = getByTestId('AmountCounter.plusButton');
    const input = getByTestId('AmountCounter.input');
    fireEvent.click(plusButton);
    expect(input).toHaveValue(2);
  });

  it('updates the input value when the minus button is clicked', () => {
    const { getByTestId } = render(<AmountCounter value={2} onChange={() => {}} />);
    const minusButton = getByTestId('AmountCounter.minusButton');
    const input = getByTestId('AmountCounter.input');
    fireEvent.click(minusButton);
    expect(input).toHaveValue(1);
  });
});
