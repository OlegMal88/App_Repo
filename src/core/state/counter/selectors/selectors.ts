import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';
import {COUNTER_FEATURE_KEY, State} from '../state';

const getCounter = (state: State): number => state.counter;

const selectState: MemoizedSelector<object, State> =
  createFeatureSelector<State>(COUNTER_FEATURE_KEY);

const selectCounter: MemoizedSelector<State, number> =
  createSelector(
    selectState,
    getCounter
  );

export {
  getCounter,
  selectState,
  selectCounter,
};
