import React from 'react';

import { renderWithStore } from '@/shared/lib/tests';
import { getFormattedPrice } from '@/shared/lib/utils';

import { TProduct } from '../../model';

import { ProductPreview } from './ProductPreview';

const data: TProduct = {
  id: '1',
  img: '/image.jpg',
  title: 'Product title',
  path: 'product-path',
  price: { USD: 14.99, EUR: 12.2 },
  priceOld: { USD: 20.99, EUR: 18.2 },
  rating: 4,
};

const actions = <div>Actions</div>;

describe('ProductPreview component', () => {
  it('renders image', () => {
    const { getByAltText } = renderWithStore(<ProductPreview data={data} actions={actions} />);
    expect(getByAltText(data.title)).toBeInTheDocument();
  });

  it('renders title', () => {
    const { getByText } = renderWithStore(<ProductPreview data={data} actions={actions} />);
    expect(getByText(data.title)).toBeInTheDocument();
  });

  it('renders price', () => {
    const { getByText } = renderWithStore(<ProductPreview data={data} actions={actions} />);
    expect(getByText(getFormattedPrice(data.price.USD, 'USD'))).toBeInTheDocument();
  });

  it('renders old price', () => {
    const { getByText } = renderWithStore(<ProductPreview data={data} actions={actions} />);
    expect(getByText(getFormattedPrice(data.priceOld!.USD, 'USD'))).toBeInTheDocument();
  });

  it('renders rating', () => {
    const { container } = renderWithStore(<ProductPreview data={data} actions={actions} />);

    const filledStars = container.querySelectorAll('.star.filled');
    expect(filledStars).toHaveLength(data.rating!);
  });

  it('renders actions', () => {
    const { getByText } = renderWithStore(<ProductPreview data={data} actions={actions} />);
    expect(getByText('Actions')).toBeInTheDocument();
  });
});
