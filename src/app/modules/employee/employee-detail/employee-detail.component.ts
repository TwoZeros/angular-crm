import { Component, OnInit,Inject } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Router} from '@angular/router';
import { EmployeeService }  from '../../../../shared/services/employee.service';
import { Employee } from '../../../../shared/models/employee';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {

  photo: string;
}
@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  employee : Employee
  photo: string;
  constructor(
    private router: Router,
  private route: ActivatedRoute,
  private EmployeeService: EmployeeService,
  private location: Location,
  public dialog: MatDialog
  ) { }

  
  ngOnInit(): void {
    this.getEmployee();  
  }

  
  getEmployee(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.EmployeeService.getEmployee(id)
      .subscribe(employee => {
        this.employee = employee}
        );
      
  }
  delete(id: number): void{
    var conf =  confirm("You want delete this employee?")
    if(conf) {
      this.EmployeeService.deleteEmployee(id).subscribe(status=> {
      
        this.router.navigate(
          ['/front/employee'] 
        );
      })
    }
  }

}


