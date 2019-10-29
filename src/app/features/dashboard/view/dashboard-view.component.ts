import { Component, Input } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.css'],
})
class DashboardViewComponent {
  @Input() title = 'Dashboard';
  list = ['list 1', 'list 2', 'list 3'];

  constructor(private dashboardService: DashboardService) {
  }
}

export { DashboardViewComponent };
