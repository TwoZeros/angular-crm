import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {Employee} from '../../../shared/models/employee'
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  employee : Employee
  firstName : string;
  lastName: String;
  telephone: String;
  birstDay: Date
  constructor(
    
    private location: Location) { }

  ngOnInit(): void {
  }
  goBack() {
    this.location.back();
    
  }
  onSubmit(form: NgForm){
    console.log("work");
    console.log(form);
}
  add() {

  }

}
