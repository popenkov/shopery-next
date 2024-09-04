import React from 'react';
import { render } from '@testing-library/react';

import * as hooks from '@/shared/lib/hooks';

import { Countdown } from './Countdown';

jest.mock('@/shared/lib/hooks', () => ({
  useCountDown: jest.fn(() => ({
    days: 10,
    hours: 5,
    minutes: 30,
    seconds: 15,
  })),
}));

describe('Countdown component', () => {
  it('renders correctly', () => {
    const { container } = render(<Countdown date="2024-03-16T14:30:00.000Z" />);
    expect(container).toMatchSnapshot();
  });

  it('renders days, hours, minutes and seconds', () => {
    const { getByText } = render(<Countdown date="2024-03-16T14:30:00.000Z" />);
    expect(getByText('10')).toBeInTheDocument();
    expect(getByText('5')).toBeInTheDocument();
    expect(getByText('30')).toBeInTheDocument();
    expect(getByText('15')).toBeInTheDocument();
  });

  it('renders descriptions for days, hours, minutes and seconds', () => {
    const { getByText } = render(<Countdown date="2024-03-16T14:30:00.000Z" />);
    expect(getByText('Days')).toBeInTheDocument();
    expect(getByText('Hours')).toBeInTheDocument();
    expect(getByText('Mins')).toBeInTheDocument();
    expect(getByText('Secs')).toBeInTheDocument();
  });

  it('renders separators between values', () => {
    const { getAllByText } = render(<Countdown date="2024-03-16T14:30:00.000Z" />);
    const separators = getAllByText(':');
    expect(separators).toHaveLength(3);
  });

  it('calls useCountDown hook with correct date', () => {
    const useCountDownSpy = jest.spyOn(hooks, 'useCountDown');
    render(<Countdown date="2024-03-16T14:30:00.000Z" />);
    expect(useCountDownSpy).toHaveBeenCalledTimes(1);
    expect(useCountDownSpy).toHaveBeenCalledWith('2024-03-16T14:30:00.000Z');
  });
});
