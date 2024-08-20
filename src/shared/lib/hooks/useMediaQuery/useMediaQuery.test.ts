import React from 'react';
import { renderHook } from '@testing-library/react';
import { useMediaQuery } from './useMediaQuery';

describe('useMediaQuery', () => {
  beforeEach(() => {
    window.matchMedia = jest.fn().mockImplementation((query) => {
      return {
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
      };
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('returns false when the media query does not match', () => {
    const { result } = renderHook(() => useMediaQuery('800px'));
    expect(result.current).toBe(false);
  });

  it('returns true when the media query matches', () => {
    window.matchMedia.mockImplementation((query) => {
      return {
        matches: true,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
      };
    });

    const { result } = renderHook(() => useMediaQuery('800px'));
    expect(result.current).toBe(true);
  });

  it.skip('updates the matches state when the window is resized', () => {
    const matchMediaInstance = window.matchMedia('800px');

    const { result } = renderHook(() => useMediaQuery('800px'));
    expect(result.current).toBe(false);

    window.dispatchEvent(new Event('resize'));

    expect(result.current).toBe(true);
  });

  it.skip('cleans up the event listener when the component is unmounted', () => {
    jest.spyOn(window, 'addEventListener').mockImplementation((...args) => {
      console.log('Adding event listener:', args);
    });
    jest.spyOn(window, 'removeEventListener').mockImplementation((...args) => {
      console.log('Removing event listener:', args);
    });

    const { result, unmount } = renderHook(() => useMediaQuery('800px'));

    unmount();

    expect(window.removeEventListener).toHaveBeenCalledTimes(1);
  });
});
