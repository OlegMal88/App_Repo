import { Routes } from '@angular/router';

const ROUTE_PATHS: { [key: string]: string } = {
  dashboard: 'dashboard',
  newHire: 'welcome',
};

const ROUTES: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: ROUTE_PATHS.dashboard,
    loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: ROUTE_PATHS.newHire,
    loadChildren: () => import('./features/new-hire/new-hire.module')
                          .then(m => m.NewHireModule),
  },
];

export { ROUTES, ROUTE_PATHS };
