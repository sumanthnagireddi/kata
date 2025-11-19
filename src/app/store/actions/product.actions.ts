import { createAction, props } from "@ngrx/store";

export enum productActionTypes {
  getProducts = "[products] Get Products",
  getProductsSuccess = "[products] Get Products Success",
  getProductsFailure = "[products] Get Products Failure",

}

export const getProducts = createAction(productActionTypes.getProducts)
export const getProductsSuccess = createAction(productActionTypes.getProductsSuccess, props<{ products: any }>())
export const getProductsFailure = createAction(productActionTypes.getProductsFailure, props<{ error: any }>())
