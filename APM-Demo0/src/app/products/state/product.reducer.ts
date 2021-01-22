/* NgRx */
import { createReducer, on } from '@ngrx/store';
import * as ProductActions from './product.actions';
import * as AppState from '../../state/app.state';

export interface State extends AppState.State {
  products: ProductState;
}

// State for this feature (Product)
export interface ProductState {
  showProductCode: boolean;
}


export const productReducer = createReducer(
  {showProductCode: true},
  on(ProductActions.toggleProductCode, (state): ProductState => {
    return {
      ...state,
      showProductCode: !state.showProductCode
    };
  })
);

