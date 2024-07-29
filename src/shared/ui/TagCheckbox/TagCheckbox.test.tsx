import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TagCheckbox } from './TagCheckbox';

describe('TagCheckbox component', () => {
  it('renders correctly', () => {
    const onChange = jest.fn();
    const { container } = render(
      <TagCheckbox value="value" name="name" title="Title" onChange={onChange} />,
    );
    expect(container).toMatchSnapshot();
  });

  it('renders correct class names', () => {
    const { container } = render(
      <TagCheckbox value="value" name="name" title="Title" onChange={() => {}} />,
    );
    expect(container.querySelector('.tag')).toBeInTheDocument();
    expect(container.querySelector('.tagInput')).toBeInTheDocument();
    expect(container.querySelector('.tagText')).toBeInTheDocument();
  });

  it('renders correct text', () => {
    const { getByText } = render(
      <TagCheckbox value="value" name="name" title="Title" onChange={() => {}} />,
    );
    expect(getByText('Title')).toBeInTheDocument();
  });

  it('calls onChange when input changes', () => {
    const onChange = jest.fn();
    const { getByRole } = render(
      <TagCheckbox value="value" name="name" title="Title" onChange={onChange} />,
    );
    const input = getByRole('checkbox');
    fireEvent.click(input);
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('has correct input attributes', () => {
    const { getByRole } = render(
      <TagCheckbox value="value" name="name" title="Title" onChange={() => {}} />,
    );
    const input = getByRole('checkbox');
    expect(input.getAttribute('type')).toBe('checkbox');
    expect(input.getAttribute('name')).toBe('name');
    expect(input.getAttribute('value')).toBe('value');
  });
});
