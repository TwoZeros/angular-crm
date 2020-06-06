import {Component, Inject, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {EmployeeService} from '../../../../../shared/services/employee.service';
import {ProjectService} from '../../../../../shared/services/project.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent implements OnInit {
  nameProject: string;
  projectManagerId: number;
  totalHour: number;
  description: string;
  employeeList;

  constructor(
    private ProjectService: ProjectService,
    private EmployeeSevice: EmployeeService,
    public dialogRef: MatDialogRef<ProjectAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();

  }
  onSubmit(form: NgForm) {

    this.ProjectService.addProject({
      name: this.nameProject,
      projectManagerId: this.projectManagerId,
      totalHour: this.totalHour,
      description: this.description,
    }).subscribe(status => {

    });
  }
  getEmployees(): void {
    this.EmployeeSevice.getEmployees(
    ).subscribe(employee => {
      this.employeeList = employee;
      console.log(this.employeeList);
    });
    console.log(this.employeeList);
  }
  ngOnInit(): void {
    this.getEmployees();
  }
}
