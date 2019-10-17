import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterContainerComponent } from './container/counter-container.component';
import { CounterComponent } from './components/counter/counter.component';
import { CounterRoutingModule } from './counter.routing';



@NgModule({
  declarations: [CounterContainerComponent, CounterComponent],
  imports: [
    CommonModule,
    CounterRoutingModule,
  ]
})
export class CounterModule { }
