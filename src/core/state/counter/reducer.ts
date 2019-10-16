import {Action, createReducer, on} from '@ngrx/store';
import * as CounterActions from './actions';
import * as CounterState from './state';

const _counterReducer = createReducer(CounterState.initialState,
  on(CounterActions.increment, state => ({...state, value: state.count + 1})),
  on(CounterActions.decrement, state => ({...state, value: state.count - 1})),
  on(CounterActions.reset, state => ({...state, value: 0}))
);

function reducer(state: CounterState.State, action: Action) {
  return _counterReducer(state, action);
}

export {
  reducer
};
