import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { EmployeeService }  from '../employee.service';
import { Employee } from '../employee';
@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  employee : Employee
  constructor(
  private route: ActivatedRoute,
  private EmployeeService: EmployeeService,
  private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.EmployeeService.getEmployee(id)
      .subscribe(hero => this.employee = hero);
  }

}
