import React from 'react';
import { ProductCart } from './ProductCart';
import { TProduct } from '../../model';
import { renderWithStore } from '@/shared/lib/tests';
import { getFormattedPrice } from '@/shared/lib/utils';

describe('ProductCart component', () => {
  const data: Omit<TProduct, 'rating'> = {
    id: '1',
    img: '/image.jpg',
    title: 'Product title',
    path: 'product-path',
    price: { USD: 14.99, EUR: 12.2 },
  };

  const cartActions = <div>Cart actions</div>;
  const deleteActions = <div>Delete actions</div>;

  it('renders image', () => {
    const { getByAltText } = renderWithStore(
      <ProductCart data={data} cartActions={cartActions} deleteActions={deleteActions} />,
    );
    expect(getByAltText(data.title)).toBeInTheDocument();
  });

  it('renders title', () => {
    const { getByText } = renderWithStore(
      <ProductCart data={data} cartActions={cartActions} deleteActions={deleteActions} />,
    );
    expect(getByText(data.title)).toBeInTheDocument();
  });

  it('renders price', () => {
    const { getAllByText } = renderWithStore(
      <ProductCart data={data} cartActions={cartActions} deleteActions={deleteActions} />,
    );

    const priceValues = getAllByText(getFormattedPrice(data.price.USD, 'USD'));

    expect(priceValues).toHaveLength(2);
  });

  it('renders cart actions', () => {
    const { getByText } = renderWithStore(
      <ProductCart data={data} cartActions={cartActions} deleteActions={deleteActions} />,
    );
    expect(getByText('Cart actions')).toBeInTheDocument();
  });

  it('renders delete actions', () => {
    const { getByText } = renderWithStore(
      <ProductCart data={data} cartActions={cartActions} deleteActions={deleteActions} />,
    );
    expect(getByText('Delete actions')).toBeInTheDocument();
  });

  it('link has correct href', () => {
    const { getByRole } = renderWithStore(
      <ProductCart data={data} cartActions={cartActions} deleteActions={deleteActions} />,
    );
    const link = getByRole('link');

    expect(link).toHaveAttribute('href', data.path);
  });
});
