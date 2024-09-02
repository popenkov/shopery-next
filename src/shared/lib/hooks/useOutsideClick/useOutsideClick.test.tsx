import React, { FC } from 'react';
import { render, fireEvent } from '@testing-library/react';

import { useOutsideClick } from './useOutsideClick';

type Props = {
  callback: () => void;
};

const TestComponent: FC<Props> = ({ callback }) => {
  const ref = useOutsideClick(callback);
  return <div ref={ref}>Click me!</div>;
};

describe('useOutsideClick', () => {
  it('calls the callback when clicking outside the element', () => {
    const callback: () => void = jest.fn();

    render(<TestComponent callback={callback} />);
    fireEvent.mouseDown(document.body);

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('does not call the callback when clicking inside the element', () => {
    const callback = jest.fn();
    const TestComponent = () => {
      const ref = useOutsideClick(callback);
      return <div ref={ref}>Click me!</div>;
    };

    const { container } = render(<TestComponent />);
    const element = container.querySelector('div');

    fireEvent.mouseDown(element!);
    expect(callback).toHaveBeenCalledTimes(0);
  });

  it('does not call the callback when the component unmounts', () => {
    const callback = jest.fn();
    const TestComponent = () => {
      const ref = useOutsideClick(callback);
      return <div ref={ref}>Click me!</div>;
    };

    const { container, unmount } = render(<TestComponent />);
    const element = container.querySelector('div');

    unmount();
    fireEvent.mouseDown(element!);
    expect(callback).toHaveBeenCalledTimes(0);
  });
});
