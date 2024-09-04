import React from 'react';

import { useAppSelector as useAppSelectorOriginal } from '@/shared/lib/hooks';
import { renderWithStore } from '@/shared/lib/tests';
import { getFormattedPrice } from '@/shared/lib/utils';

import { TProduct } from '../../model';

import { ProductSmall } from './ProductSmall';

jest.mock('@/shared/lib/hooks', () => ({
  useAppSelector: jest.fn(),
}));

// @ts-ignore
const useAppSelector = useAppSelectorOriginal as jest.Mock;

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

describe('ProductSmall component', () => {
  beforeEach(() => {
    useAppSelector.mockReturnValue('USD');
  });

  it('renders image', () => {
    const { getByAltText } = renderWithStore(<ProductSmall data={data} actions={actions} />);
    expect(getByAltText(data.title)).toBeInTheDocument();
  });

  it('renders title', () => {
    const { getByText } = renderWithStore(<ProductSmall data={data} actions={actions} />);
    expect(getByText(data.title)).toBeInTheDocument();
  });

  it('renders price', () => {
    const { getByText } = renderWithStore(<ProductSmall data={data} actions={actions} />);
    expect(getByText(getFormattedPrice(data.price.USD, 'USD'))).toBeInTheDocument();
  });

  it('renders old price', () => {
    const { getByText } = renderWithStore(<ProductSmall data={data} actions={actions} />);
    expect(getByText(getFormattedPrice(data.priceOld!.USD, 'USD'))).toBeInTheDocument();
  });

  it('renders rating', () => {
    const { container } = renderWithStore(<ProductSmall data={data} actions={actions} />);
    const filledStars = container.querySelectorAll('.star.filled');

    expect(filledStars).toHaveLength(data.rating!);
  });

  it('renders actions', () => {
    const { getByText } = renderWithStore(<ProductSmall data={data} actions={actions} />);
    expect(getByText('Actions')).toBeInTheDocument();
  });

  it('link has correct href', () => {
    const { getAllByRole } = renderWithStore(<ProductSmall data={data} actions={actions} />);
    const link = getAllByRole('link')[0];

    expect(link).toHaveAttribute('href', data.path);
  });

  it('uses current currency from selector', () => {
    useAppSelector.mockReturnValue('EUR');
    const { getByText } = renderWithStore(<ProductSmall data={data} actions={actions} />);
    expect(getByText(getFormattedPrice(data.price.EUR, 'EUR'))).toBeInTheDocument();
  });
});
