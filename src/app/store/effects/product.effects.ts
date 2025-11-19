import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { getProductsFailure, getProductsSuccess, productActionTypes } from '../actions/product.actions';

@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
  ) {}

  // getProducts$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(productActionTypes.getProducts),
  //     mergeMap(() =>

  //       )
  //     )
  //   )
  // );
}
