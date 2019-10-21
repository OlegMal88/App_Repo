import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {CounterEffects} from '@state/counter/effects';
import * as CounterState from './state';
import {reducer} from './reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(CounterState.COUNTER_FEATURE_KEY, reducer),
    EffectsModule.forFeature([CounterEffects])
  ]
})
class CounterStoreModule {
}

export {
  CounterStoreModule
};
