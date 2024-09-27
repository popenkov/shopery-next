import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk';

import { getOrderById } from './orderThunk';

const data = {
  id: '1720362377187',
  items: [
    {
      id: 'qBmrBPk6K9euRVzp6V9hf',
      name: '1 Red Tomatos',
      price: { USD: 14.99, EUR: 12.2 },
      quantity: 3,
      total: { USD: 44.97, EUR: 32.2 },
      img: '/images/product-tomatos.jpg',
      path: '/',
    },
    {
      id: 'PcJJPAwNkiIh7k6D7ti1P',
      name: '1 Surjapur Mango',
      price: { USD: 14.99, EUR: 12.2 },
      quantity: 5,
      total: { USD: 44.97, EUR: 32.2 },
      img: '/images/product-mango.jpg',
      path: '/',
    },
  ],
  subtotal: { USD: 119.92, EUR: 110.92 },

  amount: 8,
  discount: 0,
  delivery: null,
  paymentMethod: 'PayPal',
  status: 'Processing',
  shippingAddress: {
    firstName: 'Dainne',
    lastName: 'Russell',
    country: 'United States',
    state: 'New Mexico',
    zipCode: '31134',
    street: '4140 Parker Rd. Allentown, New Mexico 31134',
    email: 'dainne.ressell@gmail.com',
    phone: '(671) 555-0110',
  },
  billingAddress: {
    firstName: 'Dainne',
    lastName: 'Russell',
    country: 'United States',
    state: 'New Mexico',
    zipCode: '31134',
    street: '4140 Parker Rd. Allentown, New Mexico 31134',
    email: 'dainne.ressell@gmail.com',
    phone: '(671) 555-0110',
  },
  date: '2024-07-07T14:26:17.187Z',
};

describe('getOrderById async thunk', () => {
  it('success', async () => {
    const TEST_ORDER_ID = '12332123';
    const thunk = new TestAsyncThunk(getOrderById);
    thunk.api.post.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk(TEST_ORDER_ID);
    console.log('result', result);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  it('error', async () => {
    const TEST_ORDER_ID = '12332123';
    const thunk = new TestAsyncThunk(getOrderById);
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk(TEST_ORDER_ID);
    console.log('result', result);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('error');
  });
});
