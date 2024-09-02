import { renderHook } from '@testing-library/react';

import { useCountDown } from './useCountDown';

describe('useCountDown', () => {
  it('returns the correct countdown values', () => {
    const endDate = new Date(Date.now() + 100 * 24 * 60 * 60 * 1000).toISOString();
    const { result } = renderHook(() => useCountDown(endDate));

    // Wait for the countdown to update
    jest.advanceTimersByTime(1000);

    expect(result.current.days).toBeGreaterThan(0);
    expect(result.current.hours).toBeGreaterThan(0);
    expect(result.current.minutes).toBeGreaterThan(0);
    expect(result.current.seconds).toBeGreaterThan(0);
  });

  //   todo продумать тест лучше
  it.skip('updates the countdown values every second', () => {
    const endDate = new Date(Date.now() + 100 * 24 * 60 * 60 * 1000).toISOString();
    const { result } = renderHook(() => useCountDown(endDate));

    const initialDays = result.current.days;
    const initialHours = result.current.hours;
    const initialMinutes = result.current.minutes;
    const initialSeconds = result.current.seconds;

    // Wait for the countdown to update
    jest.advanceTimersByTime(5000);

    expect(result.current.days).toBe(initialDays);
    expect(result.current.hours).toBe(initialHours);
    expect(result.current.minutes).toBe(initialMinutes);
    expect(result.current.seconds).toBeLessThan(initialSeconds);
  });

  it('stops the countdown when the end date is reached', () => {
    const endDate = new Date(Date.now() + 1000).toISOString();
    const { result } = renderHook(() => useCountDown(endDate));

    jest.advanceTimersByTime(2000);

    expect(result.current.days).toBe(0);
    expect(result.current.hours).toBe(0);
    expect(result.current.minutes).toBe(0);
    expect(result.current.seconds).toBe(0);
  });
});
