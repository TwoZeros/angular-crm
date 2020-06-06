import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { NgForm } from '@angular/forms';
import { EmployeeService } from '../../../shared/services/employee.service';
import { ProjectWorkService } from '../../../shared/services/projectwork.service';

@Component({
  selector: 'app-projectwork-add',
  templateUrl: './projectwork-add.component.html',
  styleUrls: ['./projectwork-add.component.css']
})
export class ProjectWorkAddComponent implements OnInit {
  nameWork: string;
  startTime;
  deadlineTime;
  fill;
  skillGroups;
  employees;
  hours: Number;
  projectId: Number;
  employeeId: Number;
  constructor(
    private EmployeeService: EmployeeService,
    private ProjectWorkService: ProjectWorkService,
    public dialogRef: MatDialogRef<ProjectWorkAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onSubmit(form: NgForm) {
    this.ProjectWorkService.add({
      name: this.nameWork,
      startTime: this.startTime,
      deadlineTime: this.deadlineTime,
      fill : this.fill,
      projectId: this.projectId,
      employeeId:this.employeeId,
     
      hours: Number(this.hours)
    }).subscribe(status => {

    })
  }
  ngOnInit(): void {
    this.getGroupList()
  }
  getGroupList() {
    this.EmployeeService.getEmployees().subscribe(employees => { this.employees = employees });
  
  }
}
