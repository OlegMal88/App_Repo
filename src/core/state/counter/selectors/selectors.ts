import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';
import * as CounterState from '../state';

const getValue = (state: CounterState.State): number => state.value;

const selectState: MemoizedSelector<object, CounterState.State> =
  createFeatureSelector<CounterState.State>(CounterState.COUNTER_FEATURE_KEY);

const selectValue: MemoizedSelector<CounterState.State, number> =
  createSelector(
    selectState,
    getValue
  );

export {
  getValue,
  selectState,
  selectValue
};
