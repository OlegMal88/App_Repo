import {Action, createReducer, on} from '@ngrx/store';
import * as RootActions from './actions';
import * as RootState from './state';

const rootReducer = createReducer(RootState.initialState,
  on(RootActions.setActivePage, (state: RootState.State, {page}) => ({...state, page}))
);

function reducer(state: RootState.State, action: Action) {
  return rootReducer(state, action);
}

export {
  reducer
};
