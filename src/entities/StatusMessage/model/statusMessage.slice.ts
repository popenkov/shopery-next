import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StatusMessageSchema } from './statusMessage.types';

const initialState: StatusMessageSchema = {
  isOpen: false,
  isSuccess: undefined,
};

export const statusMessageSlice = createSlice({
  name: 'statusMessage',
  initialState,
  reducers: {
    openStatusMessage: (state, action: PayloadAction<boolean>) => {
      state.isOpen = true;
      state.isSuccess = action.payload;
    },
    closeStatusMessage: (state) => {
      state.isOpen = false;
      state.isSuccess = undefined;
    },
  },
});
export const {
  actions: { openStatusMessage, closeStatusMessage },
  reducer: statusMessageReducer,
} = statusMessageSlice;

export default statusMessageSlice;
