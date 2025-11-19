import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { getProducts } from '../../../../store/actions/product.actions';
import { Observable } from 'rxjs';
import { selectProductError, selectProductLoading, selectProducts } from '../../../../store/selectors/product.selector';
import { AsyncPipe, DecimalPipe, NgFor } from '@angular/common';
@Component({
  selector: 'app-products-list',
  imports: [NgFor,AsyncPipe],
  standalone: true,
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  private readonly store = inject(Store)
  products$!: Observable<any[]>;
  loading$!: Observable<boolean>;
  error$!: Observable<any>;
  constructor() {
    this.store.dispatch(getProducts());
  }

  ngOnInit(): void {
    this.products$ = this.store.select(selectProducts);
    this.loading$ = this.store.select(selectProductLoading);
    this.error$ = this.store.select(selectProductError);
  }
}
