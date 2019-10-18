import {createAction, props} from '@ngrx/store';

const increment = createAction('[Counter Component] Increment');
const decrement = createAction('[Counter Component] Decrement');
const reset = createAction('[Counter Component] Reset');

const getCurrentValue = createAction('[Counter Component] Get Current Value');
const getCurrentValueSuccess = createAction(
  '[Counter Component] Get Current Value Success',
  props<{ value: number, id: number }>()
);
const getCurrentValueError = createAction(
  '[Counter Component] Get Current Value Error',
  (err: any) => err,
);
const saveCurrentValueSuccess = createAction('[Counter Component] Save Current Value Success');
const saveCurrentValueError = createAction(
  '[Counter Component] Save Current Value Error',
  props<{ value: number, id: number }>()
);

export {
  increment,
  decrement,
  reset,
  getCurrentValue,
  getCurrentValueSuccess,
  getCurrentValueError,
  saveCurrentValueSuccess,
  saveCurrentValueError,
};
