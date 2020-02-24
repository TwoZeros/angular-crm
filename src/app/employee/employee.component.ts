import { Component, OnInit, ViewChild } from '@angular/core';
import {EmployeeService} from '../employee.service'
import { Employee } from '../employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {


  displayedColumns: string[] = ['id', 'firstName', 'lastName','birstDay','telephone']
  employees : Employee[]
  constructor(private EmployeeService: EmployeeService) { }
  getEmployees(): void {
    this.EmployeeService.getEmployees()
                        .subscribe(employees => this.employees = employees);
  }
  onRowClicked(row) {
    console.log('Row clicked: ', row);
}
  ngOnInit(): void {
    this.getEmployees()

  }

}
