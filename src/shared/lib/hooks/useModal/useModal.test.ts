import React from 'react';
import { renderHook, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useModal } from './useModal';

describe('useModal', () => {
  it('initially sets isMounted and isClosing to false', () => {
    const { result } = renderHook(() => useModal({ animationDelay: 100 }));
    expect(result.current.isMounted).toBe(false);
    expect(result.current.isClosing).toBe(false);
  });

  it('sets isMounted to true when isOpen is true', () => {
    const { result } = renderHook(() => useModal({ animationDelay: 100, isOpen: true }));
    expect(result.current.isMounted).toBe(true);
  });

  it.skip('calls onClose after animationDelay when close is called', () => {
    const onCloseMock = jest.fn();
    const { result } = renderHook(() => useModal({ animationDelay: 100, onClose: onCloseMock }));
    result.current.close();
    expect(onCloseMock).not.toHaveBeenCalled();
    jest.advanceTimersByTime(100); // разобраться с таймером
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('sets isClosing to false after onClose is called', () => {
    const onCloseMock = jest.fn();
    const { result } = renderHook(() => useModal({ animationDelay: 100, onClose: onCloseMock }));
    result.current.close();
    jest.advanceTimersByTime(100);
    expect(result.current.isClosing).toBe(false);
  });

  it('calls close when Escape key is pressed', async () => {
    const onCloseMock = jest.fn();
    const { result } = renderHook(() =>
      useModal({ animationDelay: 0, onClose: onCloseMock, isOpen: true }),
    );
    await userEvent.keyboard('{Escape}');
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
