import { Routes } from '@angular/router';
import { CounterContainerComponent } from './container/counter-container.component';

const COUNTER_ROUTES: Routes = [
  {
    path: '',
    component: CounterContainerComponent,
  },
];

export { COUNTER_ROUTES };
