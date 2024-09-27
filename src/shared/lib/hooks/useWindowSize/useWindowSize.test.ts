import { act, renderHook } from '@testing-library/react';

import { useWindowSize } from './useWindowSize';

beforeEach(() => {
  global.innerWidth = 0;
  global.innerHeight = 0;
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe('useWindowSize', () => {
  it('returns the initial window size as { width: 0, height: 0 }', () => {
    const { result } = renderHook(() => useWindowSize());
    expect(result.current).toEqual({ width: 0, height: 0 });
  });

  it('updates the window size when the window is resized', () => {
    const { result } = renderHook(() => useWindowSize());

    act(() => {
      global.innerWidth = 800;
      global.innerHeight = 600;

      global.dispatchEvent(new Event('resize'));
    });

    expect(result.current).toEqual({ width: 800, height: 600 });
  });

  it('cleans up the event listener when the component is unmounted', () => {
    const { result, unmount } = renderHook(() => useWindowSize());

    act(() => {
      global.innerWidth = 800;
      global.innerHeight = 600;

      // Unmount the component
      unmount();

      global.dispatchEvent(new Event('resize'));
    });

    expect(result.current).toEqual({ width: 0, height: 0 });
  });
});
