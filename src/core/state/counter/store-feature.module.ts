import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {CommonModule} from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {CounterEffects} from '@state/counter/effects';
import * as CounterState from './state';
import {reducer} from './reducer';
import {ApiModule} from '@api/api.module';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(CounterState.COUNTER_FEATURE_KEY, reducer),
    EffectsModule.forFeature([CounterEffects]),
    ApiModule,
  ]
})
class CounterStoreModule {
}

export {
  CounterStoreModule
};
