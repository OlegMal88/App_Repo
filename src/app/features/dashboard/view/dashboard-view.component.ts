import { Component, Input } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.css'],
})
class DashboardViewComponent {
  @Input() title = 'Dashboard';

  constructor(
    private dashboardService: DashboardService
  ) {}
}

export { DashboardViewComponent };
