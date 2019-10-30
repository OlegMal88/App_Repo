import { Routes } from '@angular/router';

const ROUTE_PATHS: { [key: string]: string } = {
  newHire: 'welcome',
};

const ROUTES: Routes = [
  {
    path: '',
    redirectTo: ROUTE_PATHS.newHire,
    pathMatch: 'full',
  },
  {
    path: ROUTE_PATHS.newHire,
    loadChildren: () => import('./features/new-hire/new-hire.module')
                          .then(m => m.NewHireModule),
  },
];

export { ROUTES, ROUTE_PATHS };
