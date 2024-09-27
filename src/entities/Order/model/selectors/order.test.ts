import { StateSchema } from '@/app/providers/StoreProvider';
import { getOrderDetailedError } from './order';

// todo selector test example
describe('getOrderDetailedError', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      order: {
        orders: [],
        order: undefined,
        error: 'error',
        isLoading: false,
      },
    };
    expect(getOrderDetailedError(state as StateSchema)).toEqual('error');
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getOrderDetailedError(state as StateSchema)).toEqual(undefined);
  });
});
