import React from 'react';
import { ProductCartPreview } from './ProductCartPreview';
import { renderWithStore } from '@/shared/lib/tests';
import { TProduct } from '../../model';
import { getFormattedPrice } from '@/shared/lib/utils';

const data: TProduct = {
  id: '1',
  img: '/image.jpg',
  title: 'Product title',
  path: 'product-path',
  price: { USD: 14.99, EUR: 12.2 },
  amount: 2,
};

const actions = <div>Actions</div>;

describe('ProductCartPreview component', () => {
  it('renders image', () => {
    const { getByAltText } = renderWithStore(<ProductCartPreview data={data} actions={actions} />);
    expect(getByAltText(data.title)).toBeInTheDocument();
  });

  it('renders title', () => {
    const { getByText } = renderWithStore(<ProductCartPreview data={data} actions={actions} />);
    expect(getByText(data.title)).toBeInTheDocument();
  });

  it('renders amount', () => {
    const { getByText } = renderWithStore(<ProductCartPreview data={data} actions={actions} />);
    expect(getByText(`2`)).toBeInTheDocument();
  });

  it('renders price', () => {
    const { getByText } = renderWithStore(<ProductCartPreview data={data} actions={actions} />);

    const priceValue = getByText(getFormattedPrice(data.price.USD, 'USD'));

    expect(priceValue).toBeInTheDocument();
  });

  it('renders actions', () => {
    const { getByText } = renderWithStore(<ProductCartPreview data={data} actions={actions} />);
    expect(getByText('Actions')).toBeInTheDocument();
  });

  it('link has correct href', () => {
    const { getByRole } = renderWithStore(<ProductCartPreview data={data} actions={actions} />);
    const link = getByRole('link');

    expect(link).toHaveAttribute('href', data.path);
  });
});
