import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListModule, BorderModule } from '@company/shared-lib';
import { DashboardViewComponent } from './view/dashboard-view.component';
import { DashboardService } from './dashboard.service';
import { DASHBOARD_ROUTES } from './dashboard.routing';

@NgModule({
  declarations: [
    DashboardViewComponent,
  ],
  imports: [
    CommonModule,
    ListModule,
    BorderModule,
    RouterModule.forChild(DASHBOARD_ROUTES),
  ],
  providers: [DashboardService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
class DashboardModule {}

export { DashboardModule };
