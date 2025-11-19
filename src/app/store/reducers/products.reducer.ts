import { createReducer, INITIAL_STATE, on } from "@ngrx/store";
import { getProducts, productActionTypes } from "../actions/product.actions";
import * as productActions from '../actions/product.actions';
export interface ProductState {
  products: any[];
  loading: boolean;
  error: any;
}

export const initial_state :ProductState= {
  products: [],
  loading: false,
  error: null
}
export const productReducer = createReducer(
  initial_state,
  on(productActions.getProducts, (state) => ({
    ...state, loading: true, error: null
  })),
  on(productActions.getProductsSuccess, (state, { products }) => ({
    ...state,
    loading: false,
    products,
  })),
  on(productActions.getProductsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
)
