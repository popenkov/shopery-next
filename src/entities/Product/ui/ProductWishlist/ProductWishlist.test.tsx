import React from 'react';
import { ProductWishlist } from './ProductWishlist';
import { useAppSelector as useAppSelectorOriginal } from '@/shared/lib/hooks';
import { TProduct } from '../../model';
import { renderWithStore } from '@/shared/lib/tests';
import { getFormattedPrice } from '@/shared/lib/utils';

jest.mock('@/shared/lib/hooks', () => ({
  useAppSelector: jest.fn(),
}));

// @ts-ignore
const useAppSelector = useAppSelectorOriginal as jest.Mock;

const data: Omit<TProduct, 'rating'> = {
  id: '1',
  img: '/image.jpg',
  title: 'Product title',
  path: 'product-path',
  price: { USD: 14.99, EUR: 12.2 },
  priceOld: { USD: 20.99, EUR: 18.2 },
  stock: {
    type: 'in-stock',
    text: 'In stock',
  },
};

const actions = <div>Actions</div>;

describe('ProductWishlist component', () => {
  beforeEach(() => {
    useAppSelector.mockReturnValue('USD');
  });

  it('renders image', () => {
    const { getByAltText } = renderWithStore(<ProductWishlist data={data} actions={actions} />);

    expect(getByAltText(data.title)).toBeInTheDocument();
  });

  it('renders title', () => {
    const { getByText } = renderWithStore(<ProductWishlist data={data} actions={actions} />);

    expect(getByText(data.title)).toBeInTheDocument();
  });

  it('renders price', () => {
    const { getByText } = renderWithStore(<ProductWishlist data={data} actions={actions} />);

    expect(getByText(getFormattedPrice(data.price.USD, 'USD'))).toBeInTheDocument();
  });

  it('renders old price', () => {
    const { getByText } = renderWithStore(<ProductWishlist data={data} actions={actions} />);

    expect(getByText(getFormattedPrice(data.priceOld!.USD, 'USD'))).toBeInTheDocument();
  });

  it('renders stock', () => {
    const { getByText } = renderWithStore(<ProductWishlist data={data} actions={actions} />);

    expect(getByText(data.stock!.text)).toBeInTheDocument();
  });

  it('renders actions', () => {
    const { getByText } = renderWithStore(<ProductWishlist data={data} actions={actions} />);

    expect(getByText('Actions')).toBeInTheDocument();
  });

  it('link has correct href', () => {
    const { getAllByRole } = renderWithStore(<ProductWishlist data={data} actions={actions} />);
    const link = getAllByRole('link')[0];

    expect(link).toHaveAttribute('href', data.path);
  });

  it('uses current currency from selector', () => {
    useAppSelector.mockReturnValue('EUR');
    const { getByText } = renderWithStore(<ProductWishlist data={data} actions={actions} />);

    expect(getByText(getFormattedPrice(data.price, 'EUR'))).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const customClassName = 'custom-class';
    const { container } = renderWithStore(
      <ProductWishlist data={data} actions={actions} className={customClassName} />,
    );

    expect(container.querySelector(`.${customClassName}`)).toBeInTheDocument();
  });
});
