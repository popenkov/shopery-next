import React from 'react';
import { ProductOrder } from './ProductOrder';
import { renderWithStore } from '@/shared/lib/tests';
import { getFormattedPrice } from '@/shared/lib/utils';
import { TUserOrderItem } from '@/entities/User';

const data: TUserOrderItem = {
  id: 1,
  img: '/image.jpg',
  name: 'Product name',
  path: 'product-path',
  price: { USD: 14.99, EUR: 12.2 },
  quantity: 2,
  total: 200,
};

describe('ProductOrder component', () => {
  const currentCurrency = 'USD';

  it('renders image', () => {
    const { getByAltText } = renderWithStore(<ProductOrder data={data} />);

    expect(getByAltText(data.name)).toBeInTheDocument();
  });

  it('renders name', () => {
    const { getByText } = renderWithStore(<ProductOrder data={data} />);

    expect(getByText(data.name)).toBeInTheDocument();
  });

  it('renders price', () => {
    const { getByText } = renderWithStore(<ProductOrder data={data} />);

    expect(getByText(getFormattedPrice(data.price.USD, currentCurrency))).toBeInTheDocument();
  });

  it('renders quantity', () => {
    const { container } = renderWithStore(<ProductOrder data={data} />);
    const quantityContainer = container.querySelector('.ProductOrderQuantity ');
    expect(quantityContainer).toBeInTheDocument();
  });

  it('renders total', () => {
    const { getByText } = renderWithStore(<ProductOrder data={data} />);

    expect(getByText(getFormattedPrice(data.total, currentCurrency))).toBeInTheDocument();
  });

  it('link has correct href', () => {
    const { getByRole } = renderWithStore(<ProductOrder data={data} />);
    const link = getByRole('link');

    expect(link).toHaveAttribute('href', data.path);
  });
});
