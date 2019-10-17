import {createAction, props} from '@ngrx/store';

const setActivePage = createAction(
  '[Root] Set Active Page',
  props<{ page: string }>()
);

export {
  setActivePage
};
