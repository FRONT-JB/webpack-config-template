import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../reducer';

const RequestSliceName = 'REQUEST' as const;

interface RequestState {
  filter: [];
  isOnGoing: boolean;
  requestList: [];
  filteredList: [];
}

const initialState: RequestState = {
  filter: [],
  isOnGoing: false,
  requestList: [],
  filteredList: [],
};

const requestSlice = createSlice({
  name: RequestSliceName,
  initialState,
  reducers: {
    toggleOnGoing: (state) => {
      state.isOnGoing = !state.isOnGoing;
    },
  },
  extraReducers: {},
});
export const { toggleOnGoing } = requestSlice.actions;
export const requestSelector = (state: RootState) => state.request;
export default requestSlice;
