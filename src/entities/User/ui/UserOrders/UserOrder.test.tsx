import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { UserOrder } from './UserOrder';
import { selectCurrentCurrency } from '@/entities/Currency';
import { useAppSelector } from '@/shared/lib/hooks';
import { getFormattedPrice, getWordDeclination } from '@/shared/lib/utils';
import { TOrder } from '@/entities/Order';

jest.mock('@/entities/Currency', () => ({
  selectCurrentCurrency: jest.fn(() => 'USD'),
}));

jest.mock('@/shared/lib/hooks', () => ({
  useAppSelector: jest.fn((selector) => selector()),
}));

jest.mock('@/shared/lib/utils', () => ({
  getFormattedPrice: jest.fn((price, currency) => `${price} ${currency}`),
  getWordDeclination: jest.fn((amount, words) => `${amount} ${words[0]}`),
}));

describe('UserOrder component', () => {
  const order: TOrder = {
    id: '1',
    date: new Date('2022-01-01T12:00:00.000Z'),
    subtotal: { USD: 14.99, EUR: 12.2 },
    amount: 2,
    status: 'Processing',
  };

  it.skip('renders correctly', () => {
    const { getByText } = render(<UserOrder order={order} />);
    expect(getByText(`#${order.id}`)).toBeInTheDocument();
    expect(getByText(new Date(order.date).toDateString())).toBeInTheDocument();
    // expect(getByText(`$100 USD (2 Product)`)).toBeInTheDocument();
    expect(getByText(order.status)).toBeInTheDocument();
    expect(getByText('View Details')).toBeInTheDocument();
  });

  it('calls useAppSelector with correct selector', () => {
    render(<UserOrder order={order} />);
    expect(useAppSelector).toHaveBeenCalledTimes(1);
    expect(useAppSelector).toHaveBeenCalledWith(selectCurrentCurrency);
  });

  it('calls getFormattedPrice with correct arguments', () => {
    render(<UserOrder order={order} />);
    expect(getFormattedPrice).toHaveBeenCalledTimes(1);
    expect(getFormattedPrice).toHaveBeenCalledWith(order.subtotal, 'USD');
  });

  it('calls getWordDeclination with correct arguments', () => {
    render(<UserOrder order={order} />);
    expect(getWordDeclination).toHaveBeenCalledTimes(1);
    expect(getWordDeclination).toHaveBeenCalledWith(order.amount, ['Product', 'Products']);
  });

  it.skip('renders link with correct href', () => {
    const { getByText } = render(<UserOrder order={order} />);
    const link = getByText('View Details');
    expect(link).toHaveAttribute('href', `/account/order/${order.id}`);
  });
});
