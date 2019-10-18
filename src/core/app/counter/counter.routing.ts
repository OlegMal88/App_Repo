import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CounterContainerComponent} from './container/counter-container.component';

const COUNTER_ROUTES: Routes = [
  {
    path: '',
    component: CounterContainerComponent,
  },
  {
    path: ':value',
    component: CounterContainerComponent,
  }
];

export {
  COUNTER_ROUTES
};
