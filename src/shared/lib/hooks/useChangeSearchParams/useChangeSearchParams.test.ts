// import React from 'react';
// import { renderHook, act } from '@testing-library/react';
// import { useChangeSearchParams } from './useChangeSearchParams';

// jest.mock('next/navigation', () => ({
//   useRouter: () => ({ push: jest.fn() }),
//   useSearchParams: () => 'param1=value1&param2=value2',
//   usePathname: () => '/path/to/page',
// }));

// describe('useChangeSearchParams', () => {
//   it('returns an object with expected methods', () => {
//     const { result } = renderHook(() => useChangeSearchParams());
//     expect(result.current).toEqual({
//       getSearchParam: expect.any(Function),
//       checkParams: expect.any(Function),
//       setQueryParams: expect.any(Function),
//       removeQueryParam: expect.any(Function),
//     });
//   });

//   describe('getSearchParam', () => {
//     it('returns the value of a parameter', () => {
//       const { result } = renderHook(() => useChangeSearchParams());
//       expect(result.current.getSearchParam('param1')).toBe('value1');
//     });

//     it('returns null if the parameter is not present', () => {
//       const { result } = renderHook(() => useChangeSearchParams());
//       expect(result.current.getSearchParam('param5')).toBeNull();
//     });
//   });

//   describe('checkParams', () => {
//     it('returns true if the parameter is present', () => {
//       const { result } = renderHook(() => useChangeSearchParams());
//       expect(result.current.checkParams('param1')).toBe(true);
//     });

//     it('returns false if the parameter is not present', () => {
//       const { result } = renderHook(() => useChangeSearchParams());
//       expect(result.current.checkParams('param5')).toBe(false);
//     });
//   });

//   describe('setQueryParams', () => {
//     it('calls router.push with the correct URL', () => {
//       const pushMock = jest.fn();
//       useRouter.mockImplementationOnce(() => ({ push: pushMock }));
//       const { result } = renderHook(() => useChangeSearchParams());
//       result.current.setQueryParams('param4', 'value4');
//       expect(pushMock).toHaveBeenCalledTimes(1);
//       expect(pushMock).toHaveBeenCalledWith(
//         '/path/to/page?param1=value1&param2=value2&param4=value4',
//         { scroll: false },
//       );
//     });
//   });

//   describe('removeQueryParam', () => {
//     it('calls router.push with the correct URL', () => {
//       const pushMock = jest.fn();
//       useRouter.mockImplementationOnce(() => ({ push: pushMock }));
//       const { result } = renderHook(() => useChangeSearchParams());
//       result.current.removeQueryParam('param1');
//       expect(pushMock).toHaveBeenCalledTimes(1);
//       expect(pushMock).toHaveBeenCalledWith('/path/to/page', { scroll: false });
//     });
//   });
// });

import { renderHook } from '@testing-library/react';
import { useRouter } from 'next/navigation';

import { useChangeSearchParams } from './useChangeSearchParams';
jest.mock('next/navigation', () => ({
  __esModule: true,
  useRouter: jest.fn(() => ({ push: jest.fn() })),
  useSearchParams: () => new URLSearchParams('param1=value1&param2=value2'),
  usePathname: () => '/path/to/page',
}));

const useRouterMock = jest.mocked(useRouter);

beforeEach(() => {
  //   useSearchParamsMock.mockClear();
});

describe('useChangeSearchParams', () => {
  it('returns an object with expected methods', () => {
    const { result } = renderHook(() => useChangeSearchParams());
    expect(result.current).toEqual({
      getSearchParam: expect.any(Function),
      checkParams: expect.any(Function),
      setQueryParams: expect.any(Function),
      removeQueryParam: expect.any(Function),
    });
  });

  describe('getSearchParam', () => {
    it('returns the value of a parameter', () => {
      const { result } = renderHook(() => useChangeSearchParams());
      expect(result.current.getSearchParam('param1')).toBe('value1');
    });

    it('returns null if the parameter is not present', () => {
      const { result } = renderHook(() => useChangeSearchParams());
      expect(result.current.getSearchParam('param5')).toBeNull();
    });
  });

  describe('checkParams', () => {
    it('returns true if the parameter is present', () => {
      const { result } = renderHook(() => useChangeSearchParams());
      expect(result.current.checkParams('param1')).toBe(true);
    });

    it('returns false if the parameter is not present', () => {
      const { result } = renderHook(() => useChangeSearchParams());
      expect(result.current.checkParams('param5')).toBe(false);
    });
  });

  describe('setQueryParams', () => {
    it('calls router.push with the correct URL', () => {
      const pushMock = jest.fn();
      // @ts-ignore
      useRouterMock.mockImplementationOnce(() => ({ push: pushMock })); // Call mockImplementationOnce on the mock function
      const { result } = renderHook(() => useChangeSearchParams());
      result.current.setQueryParams('param4', 'value4');
      expect(pushMock).toHaveBeenCalledTimes(1);
      expect(pushMock).toHaveBeenCalledWith(
        '/path/to/page?param1=value1&param2=value2&param4=value4',
        { scroll: false },
      );
    });
  });

  describe('removeQueryParam', () => {
    it('calls router.push with the correct URL', () => {
      const pushMock = jest.fn();
      // @ts-ignore
      useRouterMock.mockImplementationOnce(() => ({ push: pushMock }));
      const { result } = renderHook(() => useChangeSearchParams());
      result.current.removeQueryParam('param1');
      expect(pushMock).toHaveBeenCalledTimes(1);
      expect(pushMock).toHaveBeenCalledWith('/path/to/page?param2=value2', { scroll: false });
    });
  });
});
