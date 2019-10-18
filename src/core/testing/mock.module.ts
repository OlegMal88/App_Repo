/* tslint:disable:no-empty*/
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {Store, StoreModule} from '@ngrx/store';
import {MockState} from '@ngrx/store/testing';

const directives = [];
const components = [];
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
