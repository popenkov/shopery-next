import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ProductLarge } from './ProductLarge';
import { TProduct } from '../../model';
import { getFormattedPrice } from '@/shared/lib/utils';
import { renderWithStore } from '@/shared/lib/tests';

const data: TProduct = {
  id: '1',
  img: '/image.jpg',
  title: 'Product title',
  path: 'product-path',
  price: { USD: 14.99, EUR: 12.2 },
  priceOld: { USD: 20.99, EUR: 18.2 },
  rating: 4,
};

const currentCurrency = 'USD';

const actions = <div>Actions</div>;
const cartAction = <div>Cart action</div>;

describe('ProductLarge component', () => {
  it('renders image', () => {
    const { getByAltText } = renderWithStore(
      <ProductLarge data={data} actions={actions} cartAction={cartAction} />,
    );
    expect(getByAltText(data.title)).toBeInTheDocument();
  });

  it('renders title', () => {
    const { getByText } = renderWithStore(
      <ProductLarge data={data} actions={actions} cartAction={cartAction} />,
    );
    expect(getByText(data.title)).toBeInTheDocument();
  });

  it('renders price', () => {
    const { getByText } = renderWithStore(
      <ProductLarge data={data} actions={actions} cartAction={cartAction} />,
    );
    expect(getByText(getFormattedPrice(data.price.USD, currentCurrency))).toBeInTheDocument();
  });

  it('renders old price', () => {
    const { getByText } = renderWithStore(
      <ProductLarge data={data} actions={actions} cartAction={cartAction} />,
    );
    expect(getByText(getFormattedPrice(data.priceOld!.USD, currentCurrency))).toBeInTheDocument();
  });

  it('renders rating', () => {
    const { container } = renderWithStore(
      <ProductLarge data={data} actions={actions} cartAction={cartAction} />,
    );

    const filledStars = container.querySelectorAll('.star.filled');
    expect(filledStars).toHaveLength(data.rating!);
  });

  it('renders actions', () => {
    const { getByText } = renderWithStore(
      <ProductLarge data={data} actions={actions} cartAction={cartAction} />,
    );
    expect(getByText('Actions')).toBeInTheDocument();
  });

  it('renders cart action', () => {
    const { getByText } = renderWithStore(
      <ProductLarge data={data} actions={actions} cartAction={cartAction} />,
    );
    expect(getByText('Cart action')).toBeInTheDocument();
  });

  it('link has correct href', () => {
    const { getByRole } = renderWithStore(
      <ProductLarge data={data} actions={actions} cartAction={cartAction} />,
    );
    const link = getByRole('link');

    expect(link).toHaveAttribute('href', `/products/${data.path}`);
  });
});
