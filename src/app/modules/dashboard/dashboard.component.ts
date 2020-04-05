import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../shared/services/dashboard.services';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  bigChart = [];
  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.bigChart = this.dashboardService.bigChart();
  }

}
