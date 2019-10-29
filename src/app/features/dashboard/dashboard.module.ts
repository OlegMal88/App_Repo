import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardViewComponent } from './view/dashboard-view.component';
import { DashboardService } from './dashboard.service';
import { DASHBOARD_ROUTES } from './dashboard.routing';
// TODO uncoment after connect in local enviroment to @equifax/packet-ui-kit
// import { ListModule, BorderModule } from '@equifax/packet-ui-kit';

@NgModule({
  declarations: [DashboardViewComponent],
  imports: [
    CommonModule,
    // ListModule,
    // BorderModule,
    RouterModule.forChild(DASHBOARD_ROUTES),
  ],
  providers: [DashboardService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
class DashboardModule {}

export { DashboardModule };
