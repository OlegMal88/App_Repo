import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CounterContainerComponent} from './container/counter-container.component';
import {CounterComponent} from './components/counter/counter.component';
import {COUNTER_ROUTES} from './counter.routing';
import {CounterContainerService} from './container/counter-container.service';

@NgModule({
  declarations: [
    CounterContainerComponent,
    CounterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(COUNTER_ROUTES)
  ],
  providers: [
    CounterContainerService
  ]
})
class CounterModule {
}

export {CounterModule};
