import { combineReducers } from '@reduxjs/toolkit';
import requestSlice from '../slices/request';

const rootReducer = combineReducers({
  request: requestSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
