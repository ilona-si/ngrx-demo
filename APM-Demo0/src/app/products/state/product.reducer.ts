/* NgRx */
import { createReducer, on } from '@ngrx/store';
import * as ProductActions from './product.actions';

export const productReducer = createReducer(
  {showProductCode: true},
  on(ProductActions.toggleProductCode, state => {
    return {
      ...state,
      showProductCode: !state.showProductCode
    };
  })
);

