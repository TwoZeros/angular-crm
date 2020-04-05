import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {Employee} from '../../../../shared/models/employee'
import { NgForm} from '@angular/forms';
import {EmployeeService} from '../../../../shared/services/employee.service'
import {Router} from '@angular/router';

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
  email: String;
  birthDay: Date
  constructor(
    private router: Router,
    private EmployeeService: EmployeeService,
    private location: Location,
    ) { }

  ngOnInit(): void {
  }
  goBack() {
    this.location.back();
    
  }
  onSubmit(form: NgForm){
    this.EmployeeService.addEmployee({
          firstName: this.firstName,
          middleName: this.middleName, 
          secondName: this.secondName,
          phoneNumber: this.phoneNumber,
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
