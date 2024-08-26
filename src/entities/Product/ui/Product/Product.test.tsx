import React from 'react';
import { Product } from './Product';
import { TProduct } from '../../model';
import { renderWithStore } from '@/shared/lib/tests';
import { getFormattedPrice } from '@/shared/lib/utils';

const data: TProduct = {
  id: '1',
  img: '/image.jpg',
  title: 'Product title',
  path: 'product-path',
  price: { USD: 14.99, EUR: 12.2 },
  priceOld: { USD: 20.99, EUR: 22.2 },
  rating: 4,
};

const actions = <div>Actions</div>;
const cartAction = <div>Cart action</div>;

describe('Product component', () => {
  it('renders image', () => {
    const { getByAltText } = renderWithStore(
      <Product data={data} actions={actions} cartAction={cartAction} />,
    );
    expect(getByAltText(data.title)).toBeInTheDocument();
  });

  it('renders title', () => {
    const { getByText } = renderWithStore(
      <Product data={data} actions={actions} cartAction={cartAction} />,
    );
    expect(getByText(data.title)).toBeInTheDocument();
  });

  it('renders price', () => {
    const { getByText } = renderWithStore(
      <Product data={data} actions={actions} cartAction={cartAction} />,
    );

    expect(getByText(getFormattedPrice(data.price.USD, 'USD'))).toBeInTheDocument();
  });

  it('renders old price', () => {
    const { getByText } = renderWithStore(
      <Product data={data} actions={actions} cartAction={cartAction} />,
    );
    expect(getByText(getFormattedPrice(data.priceOld!.USD, 'USD'))).toBeInTheDocument();
  });

  it('renders rating', () => {
    const { container } = renderWithStore(
      <Product data={data} actions={actions} cartAction={cartAction} />,
    );
    const ratingWrapper = container.querySelector('.rating');

    expect(ratingWrapper).toBeInTheDocument();
  });

  it('calls link href when clicked', () => {
    const { getByRole } = renderWithStore(
      <Product data={data} actions={actions} cartAction={cartAction} />,
    );
    const link = getByRole('link');

    expect(link).toHaveAttribute('href', `/products/${data.path}`);
  });

  it('renders actions', () => {
    const { getByText } = renderWithStore(
      <Product data={data} actions={actions} cartAction={cartAction} />,
    );
    expect(getByText('Actions')).toBeInTheDocument();
  });

  it('renders cart action', () => {
    const { getByText } = renderWithStore(
      <Product data={data} actions={actions} cartAction={cartAction} />,
    );
    expect(getByText('Cart action')).toBeInTheDocument();
  });
});
