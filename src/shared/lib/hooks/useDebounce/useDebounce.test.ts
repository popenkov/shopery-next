import { renderHook, waitFor } from '@testing-library/react';

import { useDebounce } from './useDebounce';

describe('useDebounce', () => {
  it('returns the initial value immediately', () => {
    const { result } = renderHook(() => useDebounce({ value: 'initial value' }));
    expect(result.current).toBe('initial value');
  });

  it('debounces the value after the specified delay', async () => {
    const { result } = renderHook(() => useDebounce({ value: 'initial value', delay: 100 }));
    expect(result.current).toBe('initial value');

    result.current = 'new value';

    await waitFor(() => {
      expect(result.current).toBe('new value');
    });
  });

  it('clears the timeout when the component is unmounted', () => {
    const { result, unmount } = renderHook(() =>
      useDebounce({ value: 'initial value', delay: 100 }),
    );
    expect(result.current).toBe('initial value');

    // Update the value
    result.current = 'new value';

    unmount();

    jest.runOnlyPendingTimers();
    expect(result.current).toBe('new value');
  });
});
