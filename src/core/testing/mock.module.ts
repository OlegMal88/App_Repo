/* tslint:disable:no-empty*/
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {Store, StoreModule} from '@ngrx/store';
import {MockState} from '@ngrx/store/testing';
import {CounterMockComponent} from '@testing/counter/counter-mock.component';

const directives = [];
const components = [CounterMockComponent];
const pipes = [];

@NgModule({
  declarations: [
    ...components,
    ...directives,
    ...pipes,
  ],
  exports: [
    ...components,
    ...directives,
    ...pipes
  ],
  imports: [
    CommonModule,
    StoreModule.forRoot({})
  ],
  providers: [
    {
      provide: Store,
      useValue: {
        dispatch() {
        }
      }
    },
    MockState,
  ]
})
class MocksModule {
}

export {MocksModule};
