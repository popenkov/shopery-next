import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';

import { ImageUploader } from './ImageUploader';

// eslint-disable-next-line
jest.mock('next/image', () => ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} data-testid="ImageUploader.preview" />
));

describe('ImageUploader component', () => {
  it('renders correctly', () => {
    const imageSrc = 'https://test.com/image.jpg';
    const onChange = jest.fn();
    const { container } = render(<ImageUploader imageSrc={imageSrc} onChange={onChange} />);
    expect(container).toMatchSnapshot();
  });

  it('renders image preview correctly', () => {
    const imageSrc = 'https://test.com/image.jpg';
    const onChange = jest.fn();
    const { getByTestId } = render(<ImageUploader imageSrc={imageSrc} onChange={onChange} />);
    const imagePreview = getByTestId('ImageUploader.preview');
    expect(imagePreview).toBeInTheDocument();
  });

  it('calls onChange handler when file is selected', () => {
    const imageSrc = 'https://test.com/image.jpg';
    const onChange = jest.fn();
    const { getByTestId } = render(<ImageUploader imageSrc={imageSrc} onChange={onChange} />);
    const fileInput = getByTestId('ImageUploader.input');
    const file = new File(['test'], 'test.jpg', {
      type: 'image/jpeg',
    });
    fireEvent.change(fileInput, { target: { files: [file] } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('displays error message when file size exceeds max size', () => {
    const imageSrc = 'https://test.com/image.jpg';
    const onChange = jest.fn();
    const maxSize = 1024;
    const { getByText, getByTestId } = render(
      <ImageUploader imageSrc={imageSrc} onChange={onChange} maxSize={maxSize} />,
    );
    const fileInput = getByTestId('ImageUploader.input');
    const file = new File(['test'], 'test.jpg', {
      type: 'image/jpeg',
    });
    Object.defineProperty(file, 'size', { value: maxSize * 2 });
    fireEvent.change(fileInput, { target: { files: [file] } });
    const errorMessage = getByText(`File size exceeds ${maxSize / 1024}KB`);
    expect(errorMessage).toBeInTheDocument();
  });

  it('updates preview when file is selected', () => {
    const imageSrc = 'https://test.com/image.jpg';
    const onChange = jest.fn();
    const { getByTestId } = render(<ImageUploader imageSrc={imageSrc} onChange={onChange} />);
    const fileInput = getByTestId('ImageUploader.input');
    const file = new File(['test'], 'test.jpg', {
      type: 'image/jpeg',
    });
    fireEvent.change(fileInput, { target: { files: [file] } });
    const newPreview = 'data:image/jpeg;base64,test';
    waitFor(() => {
      const updatedPreview = getByTestId('ImageUploader.preview');
      expect(updatedPreview).toHaveAttribute('src', newPreview);
    });
  });
});
