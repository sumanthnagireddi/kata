import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { productReducer, ProductState } from './products.reducer';

export interface State {
  productState: ProductState
}


export const reducers: ActionReducerMap<State> = {
  productState: productReducer
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
