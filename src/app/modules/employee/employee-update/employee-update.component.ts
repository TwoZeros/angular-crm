import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Router} from '@angular/router';
import { EmployeeService }  from '../../../../shared/services/employee.service';
import { Employee } from '../../../../shared/models/employee';
import { FormGroup, FormControl, Validators, FormArray, FormsModule } from '@angular/forms';
@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {
  employee : Employee;
  updateForm : FormGroup;
  currentIdEmployee : number;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private EmployeeService: EmployeeService,
    private location: Location
  ) { }


  ngOnInit(): void {
    this.currentIdEmployee = +this.route.snapshot.paramMap.get('id');

    this.getEmployee();
  }
  createForm(): void {
    this.updateForm = new FormGroup({
             
      firstName: new FormControl(this.employee.firstName, [Validators.required]),
      secondName: new FormControl(this.employee.secondName, [Validators.required]),
      middleName: new FormControl(this.employee.middleName, [Validators.required]),
      email: new FormControl(this.employee.email, [Validators.required]),
      phoneNumber: new FormControl(this.employee.phoneNumber, [Validators.required]),
      birthDay: new FormControl(new Date(this.employee.birthDay)),
  });
  }
  submit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.EmployeeService.updateEmployee(this.currentIdEmployee,{ 
      id:id,
      firstName:this.updateForm.value.firstName,
      secondName:this.updateForm.value.secondName,
      middleName:this.updateForm.value.middleName,
      birthDay:this.updateForm.value.birthDay,
      email:this.updateForm.value.email,
      phoneNumber:this.updateForm.value.phoneNumber
    }).subscribe(status =>{
      this.router.navigate(
        ['/employee',id] 
      );
    } );
   
  }
  getEmployee(): void {
 
    this.EmployeeService.getEmployee(this.currentIdEmployee)
      .subscribe(employee => {
        this.employee = employee;
        this.createForm();
      }
        );
      
  }

}
