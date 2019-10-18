import {Routes} from '@angular/router';

const ROUTE_PATHS = {
  counter: 'counter',
};

const ROUTES: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: ROUTE_PATHS.counter,
    loadChildren: () => import('./app/counter/counter.module').then(m => m.CounterModule),
  },
];

export {ROUTES, ROUTE_PATHS};
