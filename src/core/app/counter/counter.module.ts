import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CounterContainerComponent} from './container/counter-container.component';
import {CounterComponent} from './components/counter/counter.component';
import {COUNTER_ROUTES} from './counter.routing';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    CounterContainerComponent,
    CounterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(COUNTER_ROUTES)
  ]
})
class CounterModule {
}

export {CounterModule};
