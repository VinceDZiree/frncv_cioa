import {combineReducers, configureStore} from '@reduxjs/toolkit';
import produitReducer from './produits.reducer';

export const store = configureStore({
  reducer: combineReducers({produits: produitReducer}),
  devTools: true,
});
