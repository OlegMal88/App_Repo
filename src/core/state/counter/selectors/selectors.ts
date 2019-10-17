import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';
import * as CounterState from '../state';

const getCounter = (state: CounterState.State): number => state.counter;

const selectState: MemoizedSelector<object, CounterState.State> =
  createFeatureSelector<CounterState.State>(CounterState.COUNTER_FEATURE_KEY);

const selectCounter: MemoizedSelector<CounterState.State, number> =
  createSelector(
    selectState,
    getCounter,
  );

export {
  getCounter,
  selectState,
  selectCounter,
};
