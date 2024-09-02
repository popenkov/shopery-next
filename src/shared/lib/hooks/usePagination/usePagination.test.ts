import { renderHook } from '@testing-library/react';

import { usePagination } from './usePagination';

describe('usePagination', () => {
  it('returns the correct pagination range when totalPageNumbers is greater than or equal to totalPageCount', () => {
    const { result } = renderHook(() =>
      usePagination({
        totalElements: 100,
        pageSize: 10,
        currentPage: 1,
        siblingCount: 1,
      }),
    );

    expect(result.current).toEqual([1, 2, 3, 4, 5, '...', 10]);
  });

  it('returns the correct pagination range when shouldShowLeftDots is true and shouldShowRightDots is false', () => {
    const { result } = renderHook(() =>
      usePagination({
        totalElements: 100,
        pageSize: 10,
        currentPage: 5,
        siblingCount: 1,
      }),
    );

    expect(result.current).toEqual([1, '...', 4, 5, 6, '...', 10]);
  });

  it('returns the correct pagination range when shouldShowLeftDots is false and shouldShowRightDots is true', () => {
    const { result } = renderHook(() =>
      usePagination({
        totalElements: 100,
        pageSize: 10,
        currentPage: 8,
        siblingCount: 1,
      }),
    );

    expect(result.current).toEqual([1, '...', 6, 7, 8, 9, 10]);
  });

  it('returns the correct pagination range when shouldShowLeftDots and shouldShowRightDots are both true', () => {
    const { result } = renderHook(() =>
      usePagination({
        totalElements: 100,
        pageSize: 10,
        currentPage: 5,
        siblingCount: 2,
      }),
    );

    expect(result.current).toEqual([1, '...', 3, 4, 5, 6, 7, '...', 10]);
  });

  it('returns an empty array when totalElements is 0', () => {
    const { result } = renderHook(() =>
      usePagination({
        totalElements: 0,
        pageSize: 10,
        currentPage: 1,
        siblingCount: 1,
      }),
    );

    expect(result.current).toEqual([]);
  });
});
