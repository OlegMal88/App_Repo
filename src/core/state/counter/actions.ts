import { createAction, props } from '@ngrx/store';
import * as models from '@api/models/';

const increment = createAction('[Counter Component] Increment');
const decrement = createAction('[Counter Component] Decrement');
const reset = createAction('[Counter Component] Reset');

const getCurrentValue = createAction('[Counter Component] Get Current Value');
const getCurrentValueSuccess = createAction(
  '[Counter Component] Get Current Value Success',
  props<models.CounterModel>()
);
const getCurrentValueError = createAction('[Counter Component] Get Current Value Error', (err: any) => err);

export { increment, decrement, reset, getCurrentValue, getCurrentValueSuccess, getCurrentValueError };
