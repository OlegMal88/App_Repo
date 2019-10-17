import {Action, createReducer, on} from '@ngrx/store';
import * as CounterActions from './actions';
import * as CounterState from './state';

const counterReducer = createReducer(CounterState.initialState,
  on(CounterActions.getCurrentValueSuccess, state => (
    {
      ...state,
      counter: state.counter,
      error: '',
    })
  ),
  on(CounterActions.increment, state => ({...state, counter: state.counter + 1})),
  on(CounterActions.decrement, state => ({...state, counter: state.counter - 1})),
  on(CounterActions.reset, state => ({...state, counter: 0}))
);

function reducer(state: CounterState.State, action: Action) {
  return counterReducer(state, action);
}

export {
  reducer
};
