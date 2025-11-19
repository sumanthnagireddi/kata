import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ProductsService } from '../../services/products.service';
import { getProductsFailure, getProductsSuccess, productActionTypes } from '../actions/product.actions';

@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductsService
  ) {}

  getProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productActionTypes.getProducts),
      mergeMap(() =>
        this.productService.getProducts().pipe(
          map((products:any) => {
            return getProductsSuccess({ products:products?.data });
          }),
          catchError((error) => of(getProductsFailure({ error })))
        )
      )
    )
  );
}
