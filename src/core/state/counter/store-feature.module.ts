import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {CommonModule} from '@angular/common';
import * as CounterState from './state';
import {reducer} from './reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(CounterState.COUNTER_FEATURE_KEY, reducer)
  ]
})
class CounterStoreModule {
}

export {
  CounterStoreModule
};
