import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';
import * as RootState from '../state';

const getPage = (state: RootState.State): string => state.page;

const selectState: MemoizedSelector<object, RootState.State> =
  createFeatureSelector<RootState.State>(RootState.ROOT_REDUCER_KEY);

const selectValue: MemoizedSelector<RootState.State, string> =
  createSelector(
    selectState,
    getPage
  );

export {
  getPage,
  selectState,
  selectValue
};
