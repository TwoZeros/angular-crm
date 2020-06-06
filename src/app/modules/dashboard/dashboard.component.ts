import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../shared/services/dashboard.services';
import { ClientService } from 'src/shared/services/client.services';
import { NgxSpinnerService } from 'ngx-spinner';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ProjectWorkAddComponent } from '../projectwork-add/projectwork-add.component';
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
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.isVisibleChart =true;
    
  }
  createWork(): void {
    const dialogRef = this.dialog.open(ProjectWorkAddComponent, {
      width: '500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result)
        this.updateChart()
    });
  }
updateChart() {
  this.isVisibleChart =false;
  setTimeout(()=>this.isVisibleChart =true, 500);
  

}
}
