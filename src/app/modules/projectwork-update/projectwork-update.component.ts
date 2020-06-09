import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { NgForm } from '@angular/forms';
import { EmployeeService } from '../../../shared/services/employee.service';
import { ProjectWorkService } from '../../../shared/services/projectwork.service';
import { ProjectService } from '../../../shared/services/project.service';

@Component({
  selector: 'app-projectwork-update',
  templateUrl: './projectwork-update.component.html',
  styleUrls: ['./projectwork-update.component.css']
})
export class ProjectWorkUpdateComponent implements OnInit {
  nameWork: string;
  startTime: Date;
  deadlineTime : Date;
  projects;
  fill;
  skillGroups;
  employees;
  hours: Number;
  projectId: Number;
  employeeId: Number;
  constructor(
    private EmployeeService: EmployeeService,
    private ProjectService: ProjectService,
    private ProjectWorkService: ProjectWorkService,
    public dialogRef: MatDialogRef<ProjectWorkUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onSubmit(form: NgForm) {
    console.log();

    this.ProjectWorkService.update(this.data.id,{
      id: this.data.id,
      name: this.nameWork,
     startTime: this.startTime.getFullYear()+"-"+(this.startTime.getMonth() +1) +"-"+this.startTime.getDay(),
      deadlineTime: this.deadlineTime.getFullYear()+"-"+(this.deadlineTime.getMonth() +1)+"-"+this.deadlineTime.getDay(),
      fill : this.fill,
      projectId: this.projectId,
      employeeId:this.employeeId,
     
      hours: Number(this.hours)
    }).subscribe(status => {

    })
  }
  ngOnInit(): void {
    this.getGroupList()
    this.getDataByIdProjectWork();
  }
  getGroupList() {
    this.EmployeeService.getEmployees().subscribe(employees => { this.employees = employees });
    this.ProjectService.getProjects().subscribe(projects => { this.projects = projects });

  }
  delete() {
    this.ProjectWorkService.deleteProjectWork(this.data.id).subscribe(status => {
      
    })
  }
  getDataByIdProjectWork() {
    this.ProjectWorkService.getProjectWorkbyId(this.data.id).subscribe(projectwork => {
      this.employeeId =projectwork.employeeId;
      this.nameWork = projectwork.name;
      this.projectId = projectwork.projectId;
      this.startTime = new Date(projectwork.startTime);
   
      this.deadlineTime= new Date(projectwork.deadlineTime);
      this.fill = projectwork.fill;
      this.hours = projectwork.hours;
    } );

  }
}
