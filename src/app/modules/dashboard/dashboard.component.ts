import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../shared/services/dashboard.services';
import { ClientService } from 'src/shared/services/client.services';
import { NgxSpinnerService } from 'ngx-spinner';

import { timeInterval } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isVisibleChart;
  bigChart :any;
  constructor(private ClientService: ClientService, 
              private spinner: NgxSpinnerService,
              ) { }

  ngOnInit(): void {
    this.isVisibleChart =true;
    
  }

updateChart() {
  this.isVisibleChart =false;
  setTimeout(()=>this.isVisibleChart =true, 500);
  

}
}
