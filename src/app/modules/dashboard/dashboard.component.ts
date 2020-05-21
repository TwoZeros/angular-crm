import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../shared/services/dashboard.services';
import { ClientService } from 'src/shared/services/client.services';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  bigChart :any;
  constructor(private ClientService: ClientService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.ClientService.getClientCountByDay().subscribe(res =>  {
      this.bigChart= res;
      this.spinner.hide()}) ;
  }

}
