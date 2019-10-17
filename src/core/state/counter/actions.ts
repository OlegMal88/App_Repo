import { createAction, props } from '@ngrx/store';

const increment = createAction('[Counter Component] Increment');
const decrement = createAction('[Counter Component] Decrement');
const reset = createAction('[Counter Component] Reset');
const save = createAction('[Counter Component] Save');

const getCurrentValue = createAction('[Counter Component] Get Current Value');
const getCurrentValueSuccess = createAction(
  '[Counter Component] Get Current Value Success',
  props<{counter: number}>()
);
const getCurrentValueError = createAction(
  '[Counter Component] Get Current Value Error',
  (err: any) => err,
);
const saveCurrentValueSuccess = createAction('[Counter Component] Save Current Value Success');
const saveCurrentValueError = createAction(
  '[Counter Component] Save Current Value Error',
  props<{ counter: number }>()
);

export {
  increment,
  decrement,
  reset,
  save,
  getCurrentValue,
  getCurrentValueSuccess,
  getCurrentValueError,
  saveCurrentValueSuccess,
  saveCurrentValueError,
};
