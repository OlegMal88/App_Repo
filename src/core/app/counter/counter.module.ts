import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterContainerComponent } from './container/counter-container.component';
import { CounterComponent } from './components/counter/counter.component';
import { CounterRoutingModule } from './counter.routing';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from '@api/counter/counter.effect';



@NgModule({
  declarations: [CounterContainerComponent, CounterComponent],
  imports: [
    CommonModule,
    CounterRoutingModule,
    EffectsModule.forFeature([CounterEffects])
  ]
})
export class CounterModule { }
