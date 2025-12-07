import { configureStore } from '@reduxjs/toolkit';
import citiesReducer from './slice/cities/citiesSlice';
import logger from 'redux-logger';

export const storeCities = configureStore({
  reducer: {
    cities: citiesReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
