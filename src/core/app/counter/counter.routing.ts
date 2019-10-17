import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CounterContainerComponent } from './container/counter-container.component';

const routes: Routes = [
  {
    path: '',
    component: CounterContainerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CounterRoutingModule { }
