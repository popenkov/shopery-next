import React from 'react';
import { fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';

import { TProductDetailed } from '@/entities/Product';
import { renderWithStore } from '@/shared/lib/tests';

import { AddToCartCounter } from './AddToCartCounter';

jest.mock('@/shared/lib/hooks', () => ({
  useAppDispatch: () => useDispatchMock,
}));

jest.mock('@/entities/Cart');

jest.mock('react-redux', () => {
  const useDispatchMock = jest.fn();
  return {
    useSelector: jest.fn(),
    useDispatch: () => useDispatchMock,
  };
});

const useDispatchMock = jest.mocked(useDispatch);
const useAppDispatchMock = useDispatchMock.withTypes as jest.Mock;

useAppDispatchMock.mockImplementation(() => jest.fn());

const item: TProductDetailed = {
  id: '1',
  title: 'Product',
  sku: 'sku',
  brandLogo: 'brandLogo',
  price: { USD: 10, EUR: 15 },
  priceOld: { USD: 15, EUR: 20 },
  rating: 4,
  priceTags: [],
  tags: [],
  stock: { type: 'in-stock', text: 'In stock' },
  sliderImages: { thumb: [], main: [] },
  description: 'Description',
  categories: [],
  categoryTags: [],
  descriptions: 'Descriptions',
  specs: [],
  feedback: [],
  ad: {
    video: { background: '', src: '' },
    advantages: [],
  },
  reviews: { amount: 10, path: '' },
  relatedProducts: [],
};

describe('AddToCartCounter', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useAppDispatchMock.mockReturnValue(dispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it.skip('рендерит компонент AmountCounter с правильным значением', () => {
    const { getByTestId } = renderWithStore(<AddToCartCounter item={item} className="" />);
    const amountCounter = getByTestId('AmountCounter.input');
    expect(amountCounter).toHaveAttribute('value', '5');
  });

  it('рендерит кнопку "Add to Cart" с правильным текстом', () => {
    const { getByText } = renderWithStore(<AddToCartCounter item={item} className="" />);
    const button = getByText('Add to Cart');
    expect(button).toBeInTheDocument();
  });

  it.skip('вызывает функцию handleAmountChange при изменении значения AmountCounter', () => {
    const handleAmountChange = jest.fn();
    const { getByTestId } = renderWithStore(<AddToCartCounter item={item} className="" />);
    const amountCounter = getByTestId('AmountCounter.input');
    fireEvent.change(amountCounter, { target: { value: 10 } });
    expect(handleAmountChange).toHaveBeenCalledTimes(1);
  });
});
