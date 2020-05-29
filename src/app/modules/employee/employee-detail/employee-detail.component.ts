import { Component, OnInit,Inject } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Router} from '@angular/router';
import { EmployeeService }  from '../../../../shared/services/employee.service';
import { Employee } from '../../../../shared/models/employee';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EmployeeSkillsService } from 'src/shared/services/employeeSkills.service';
import { EmployeeSkillAddComponent } from '../employee-skill-add/employee-skill-add.component';
import { NgxSpinnerService } from "ngx-spinner";
import { AuthorisationService } from 'src/shared/services/authorisation.service';

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
  employeeSkills;
  isEditSkill = false;
  userLogin;
  constructor(
    private AuthorizationService: AuthorisationService,
    private router: Router,
  private route: ActivatedRoute,
  private EmployeeService: EmployeeService,
  private EmployeeSkillsService: EmployeeSkillsService,
  private location: Location,
  public dialog: MatDialog,
  private spinner: NgxSpinnerService

  ) { }

  
  ngOnInit(): void {
    this.spinner.show();
    this.getEmployee();  
    this.getEmployeeSkill();    
    this.userLogin = this.AuthorizationService.getLogin();

  }
  createSkill(): void {
    const dialogRef = this.dialog.open(EmployeeSkillAddComponent, {
      width: '500px',
      data: {employeeId:this.route.snapshot.paramMap.get('id') }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getEmployeeSkill()
    });
  }
  getEmployeeSkill(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.EmployeeSkillsService.getEmployeeSkillsbyEmployeeId(id)
      .subscribe(employeeSkills => {
        console.log(employeeSkills);  
        this.employeeSkills = employeeSkills}
        );
  }
  getEmployee(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.EmployeeService.getEmployee(id)
      .subscribe(employee => {
        this.employee = employee
      this.spinner.hide()
    }
        );
      
  }
  deleteEmployeeSkill(id:number) {
    if(!confirm("Вы хотите удалить этот навык у сотрудника?"))
       return 0; 
    this.EmployeeSkillsService.deleteEmployeeSkills(id)
      .subscribe(employeeSkills => {
        console.log(employeeSkills);
        this.getEmployeeSkill();
      }
        );
  }
  delete(id: number): void{
    var conf =  confirm("Вы хотите удалить сотрудника?")
    if(conf) {
      this.EmployeeService.deleteEmployee(id).subscribe(status=> {
      
        this.router.navigate(
          ['/front/employee'] 
        );
      })
    }
  }
  toggleEdit() {
    this.isEditSkill =!this.isEditSkill;
  }

}


