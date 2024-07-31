import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Radio } from './Radio';

describe('Radio component', () => {
  it('renders correctly', () => {
    const { container } = render(<Radio name="test" value="test-value" />);
    expect(container).toMatchSnapshot();
  });

  it('calls onChange callback when radio button is changed', () => {
    const onChange = jest.fn();
    const { getByRole } = render(<Radio name="test" value="test-value" onChange={onChange} />);
    const radioButton = getByRole('radio');
    fireEvent.click(radioButton);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith('test-value');
  });

  it('renders text and amount correctly', () => {
    const { getByText } = render(
      <Radio name="test" value="test-value" text="Test text" amount={10} />,
    );
    expect(getByText('Test text')).toBeInTheDocument();
    expect(getByText('(10)')).toBeInTheDocument();
  });

  it('sets checked state correctly', () => {
    const { getByRole } = render(<Radio name="test" value="test-value" checked />);
    const radioButton = getByRole('radio');
    expect(radioButton).toBeChecked();
  });

  it('does not call onChange callback when radio button is not changed', () => {
    const onChange = jest.fn();
    const { getByRole } = render(<Radio name="test" value="test-value" onChange={onChange} />);
    const radioButton = getByRole('radio');
    fireEvent.click(radioButton);
    fireEvent.click(radioButton);
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
