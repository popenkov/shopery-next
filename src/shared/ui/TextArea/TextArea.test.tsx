import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TextArea } from './TextArea';

describe('TextArea component', () => {
  it('renders correctly', () => {
    const { container } = render(<TextArea />);
    expect(container).toMatchSnapshot();
  });

  it('renders correct class names', () => {
    const { container } = render(<TextArea className="custom-class" />);
    expect(container.querySelector('.inputWrapper')).toBeInTheDocument();
    expect(container.querySelector('.input')).toBeInTheDocument();
  });

  it('renders label', () => {
    const { getByText } = render(<TextArea label="Label" />);
    expect(getByText('Label')).toBeInTheDocument();
  });

  it('renders error message', () => {
    const { getByText } = render(<TextArea errorText="Error message" />);
    expect(getByText('Error message')).toBeInTheDocument();
  });

  it('renders textarea with correct id', () => {
    const { getByLabelText } = render(<TextArea label="Label" />);
    const textarea = getByLabelText('Label');
    expect(textarea).toHaveAttribute('id');
  });

  it('renders textarea with correct class names', () => {
    const { container } = render(<TextArea className="custom-class" />);
    const textareaContainer = container.querySelector('.inputWrapper');
    expect(textareaContainer).toHaveClass('custom-class');
  });
});
