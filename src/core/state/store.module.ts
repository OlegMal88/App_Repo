import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../../environments/environment';
import {StoreModule} from '@ngrx/store';
import * as Root from '@state/root';
import {CounterStoreModule} from '@state/counter';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CounterStoreModule,
    StoreModule.forRoot({
      root: Root.reducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ]
})
class RootStoreModule {
}

export {
  RootStoreModule
};

