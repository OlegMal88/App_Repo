import {createAction} from '@ngrx/store';

const increment = createAction('[Counter Component] Increment');
const decrement = createAction('[Counter Component] Decrement');
const reset = createAction('[Counter Component] Reset');

const getCurrentValue = createAction('[Counter Component] Get Current Value');
const getCurrentValueSuccess = createAction('[Counter Component] Get Current Value Success');
const getCurrentValueError = createAction('[Counter Component] Get Current Value Error');

export {
  increment,
  decrement,
  reset
};
