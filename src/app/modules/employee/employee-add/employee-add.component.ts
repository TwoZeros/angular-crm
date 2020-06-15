import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {Employee} from '../../../../shared/models/employee'
import { NgForm} from '@angular/forms';
import {EmployeeService} from '../../../../shared/services/employee.service'
import {Router} from '@angular/router';
import {DepartmentService} from "../../../../shared/services/department.service";

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  employee: Employee;
  firstName : string;
  secondName: String;
  middleName: String;
  phoneNumber: String;
  departmentId;
  departmentGroup;
  email: String;
  birthDay: Date
  constructor(
    private router: Router,
    private EmployeeService: EmployeeService,
    private DepartmentService: DepartmentService,
    private location: Location,
    ) { }

   ngOnInit() {
    this.getDepartment();
  }
  goBack() {
    this.location.back();

  }
   getDepartment() {
    this.DepartmentService.getDepartments()
      .subscribe(depart => {
        this.departmentGroup = depart;
        console.log(depart);
      });
  }
  onSubmit(form: NgForm){
    console.log(this.birthDay);
    this.EmployeeService.addEmployee({
          firstName: this.firstName,
          middleName: this.middleName,
          secondName: this.secondName,
          phoneNumber: this.phoneNumber,
          departamentId: this.departmentId,
          email: this.email,
          birthDay:this.birthDay}).subscribe(status=> {

            this.router.navigate(
              ['/employee']
            );
          })
}
  add() {

  }

}
