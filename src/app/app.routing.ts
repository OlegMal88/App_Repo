import { Routes } from '@angular/router';

const ROUTE_PATHS = {
  dashboard: 'dashboard',
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
];

export { ROUTES, ROUTE_PATHS };
