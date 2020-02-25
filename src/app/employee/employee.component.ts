import { Component, OnInit, ViewChild } from '@angular/core';
import {EmployeeService} from '../employee.service'
import { Employee } from '../employee';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {Router} from '@angular/router';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {

  dataSource ;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  displayedColumns: string[] = ['id', 'firstName', 'lastName','birstDay','telephone']
  employees : Employee[]
  constructor(private EmployeeService: EmployeeService,private router: Router) { }
  getEmployees(): void {
    this.EmployeeService.getEmployees()
                        .subscribe(employees => this.employees = employees);
  }
  onRowClicked(row : Employee) {
    this.router.navigate(
      ['/employee', row.id], 
    );
    console.log('Row clicked: ', row);
}
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}
  ngOnInit(): void {
    this.getEmployees()
    this.dataSource = new MatTableDataSource<Employee>(this.employees);
    this.dataSource.paginator = this.paginator;

    

  }

}
