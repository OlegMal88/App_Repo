import { Routes } from '@angular/router';
import { DashboardViewComponent } from './view/dashboard-view.component';

const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    component: DashboardViewComponent,
  }
];

export { DASHBOARD_ROUTES };
