import React from 'react';
import { fireEvent, waitFor } from '@testing-library/react';
import { StatusMessage } from './StatusMessage';
import { NOTIFICATION_MESSAGE_CLOSE_TIMEOUT } from '../utils';
import {
  closeStatusMessage,
  openStatusMessage,
  statusMessageReducer,
  statusMessageSlice,
} from '../model';
import { renderWithStore } from '@/shared/lib/tests';
import { StatusMessageState } from '../model/statusMessage.types';
import { useAppDispatch } from '@/shared/lib/hooks';
import { setupStore } from '@/app/lib/store';

const initialState: StatusMessageState = {
  isOpen: false,
  isSuccess: undefined,
};

const options = {
  preloadedState: {
    statusMessage: initialState,
  },
};

const dispatch = useAppDispatch();

describe('StatusMessage component', () => {
  it('initial state is correct', () => {
    const state = statusMessageSlice.getInitialState();
    expect(state).toEqual(initialState);
  });

  it('openStatusMessage sets isOpen to true and sets isSuccess', () => {
    // 1
    // const store = setupStore();
    // statusMessageReducer;
    // store.dispatch(openStatusMessage(true));
    // const { getByText } = renderWithStore(<StatusMessage />, { store });
    // expect(getByText('Success')).toBeInTheDocument();
    // 2
    // const newState = statusMessageSlice.reducer(state, openStatusMessage(true));
    // expect(newState).toEqual({
    //   isOpen: true,
    //   isSuccess: true,
    // });

    expect(statusMessageReducer(initialState, dispatch(openStatusMessage(true)))).toEqual([
      { isOpen: true, isSuccess: true },
    ]);
  });

  it('renders successfully', () => {
    const { getByText } = renderWithStore(<StatusMessage />, { preloadedState: initialState });
    expect(getByText('Success')).toBeInTheDocument();
  });

  it('renders with error class when isSuccess is false', () => {
    const { container } = renderWithStore(<StatusMessage />);
    expect(container.querySelector('.error')).toBeInTheDocument();
  });

  it('calls closeStatusMessage when close button is clicked', () => {
    const dispatch = jest.fn();
    const { getByRole } = renderWithStore(<StatusMessage />);
    const closeButton = getByRole('button');
    fireEvent.click(closeButton);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledWith(closeStatusMessage());
  });

  it('closes automatically after NOTIFICATION_MESSAGE_CLOSE_TIMEOUT', () => {
    jest.useFakeTimers();
    const { getByText } = renderWithStore(<StatusMessage />);
    expect(getByText('Success')).toBeInTheDocument();
    jest.advanceTimersByTime(NOTIFICATION_MESSAGE_CLOSE_TIMEOUT);
    expect(getByText('Success')).not.toBeInTheDocument();
  });
});
