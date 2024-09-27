import React from 'react';
import { fireEvent } from '@testing-library/react';
import { StatusMessage } from './StatusMessage';
import { openStatusMessage, statusMessageReducer, statusMessageSlice } from '../model';
import { renderWithStore } from '@/shared/lib/tests';
import { StatusMessageSchema } from '../model/statusMessage.types';
import { setupStore } from '@/app/lib/store';

const initialState: StatusMessageSchema = {
  isOpen: false,
  isSuccess: undefined,
};

describe('StatusMessage component', () => {
  // const dispatch = useAppDispatch();
  it('initial state is correct', () => {
    const state = statusMessageSlice.getInitialState();
    expect(state).toEqual(initialState);
  });

  it('openStatusMessage sets isOpen to true and sets isSuccess', () => {
    expect(statusMessageReducer(initialState, openStatusMessage(true))).toEqual({
      isOpen: true,
      isSuccess: true,
    });
  });

  // todo разобраться как это тестировать
  it('renders successfully', async () => {
    const store = setupStore();
    store.dispatch(openStatusMessage(true));

    const { getByText } = renderWithStore(<StatusMessage />, {
      store,
    });

    expect(getByText('Success')).toBeInTheDocument();
  });

  it('renders error message when isSuccess is false', () => {
    const store = setupStore();
    store.dispatch(openStatusMessage(false));

    const { getByText } = renderWithStore(<StatusMessage />, {
      store,
    });

    expect(getByText('Error')).toBeInTheDocument();
  });

  it.only('calls closeStatusMessage updates state', () => {
    const expectedResult = {
      isOpen: false,
      isSuccess: undefined,
    };
    const store = setupStore();
    store.dispatch(openStatusMessage(true));

    const { getByTestId } = renderWithStore(<StatusMessage />, { store });

    const closeButton = getByTestId('status-message-close-button');
    fireEvent.click(closeButton);
    const state = statusMessageSlice.getInitialState();
    statusMessageSlice.actions.closeStatusMessage;
    expect(state).toEqual(expectedResult);
    // expect(mockDispatchFn).toHaveBeenCalledTimes(1);
    // expect(mockUseDispatch).toHaveBeenCalledWith(closeStatusMessage());
  });
});
