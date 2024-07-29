import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Input } from './Input';

describe('Input component', () => {
  it('renders correctly', () => {
    const { container } = render(<Input />);
    expect(container).toMatchSnapshot();
  });

  it('renders label correctly', () => {
    const label = 'Input label';
    const { getByTestId } = render(<Input label={label} />);
    const labelElement = getByTestId('Input.label');
    expect(labelElement).toBeInTheDocument();
  });

  it('renders input field correctly', () => {
    const { getByTestId } = render(<Input />);
    const inputField = getByTestId('Input.input');
    expect(inputField).toBeInTheDocument();
  });

  it('calls onChange handler when input value changes', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(<Input onChange={onChange} />);
    const inputField = getByTestId('Input.input');
    fireEvent.change(inputField, { target: { value: 'New value' } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('renders error message correctly', () => {
    const errorText = 'Error message';
    const { container } = render(<Input errorText={errorText} />);
    const errorMessage = container.querySelector('.errorMessage');
    expect(errorMessage).toBeInTheDocument();
  });

  it('renders success icon correctly', () => {
    const { container } = render(<Input value="Valid value" />);
    const successIcon = container.querySelector('.inputIconSuccess');
    expect(successIcon).toBeInTheDocument();
  });

  it('renders search icon correctly', () => {
    const { container } = render(<Input type="search" />);
    const searchIcon = container.querySelector('.inputIconSearch');
    expect(searchIcon).toBeInTheDocument();
  });

  //   it('calls handleLoupeClick when search icon is clicked', () => {
  //     const handleLoupeClick = jest.fn();
  //     const { container } = render(<Input type="search" />);
  //     const searchIcon = container.querySelector('.inputIconSearch');
  //     fireEvent.click(searchIcon!);
  //     expect(handleLoupeClick).toHaveBeenCalledTimes(1);
  //   });
});
