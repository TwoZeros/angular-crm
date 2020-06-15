import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ProjectService} from "../../../../../shared/services/project.service";
import {EmployeeService} from "../../../../../shared/services/employee.service";

@Component({
  selector: 'app-project-update',
  templateUrl: './project-update.component.html',
  styleUrls: ['./project-update.component.css']
})
export class ProjectUpdateComponent implements OnInit {
  updateForm : FormGroup;
  project;
  projectManagerId: number;
  ManagerId;
  employee;
  employeeList;

  constructor(
    private ProjectService: ProjectService,
    private EmployeeSevice: EmployeeService,
    public dialogRef: MatDialogRef<ProjectUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  submit(): void {

    this.ProjectService.updateProject(this.data.id,{
      id: this.data.id,
      name: this.updateForm.value.name,
      projectManagerId: this.updateForm.value.projectManagerId,
      totalHour: this.updateForm.value.totalHour,
      description: this.updateForm.value.description,


    }).subscribe(status =>{
        this.onNoClick();
      }
    );

  }
  async ngOnInit() {
    await this.getEmployees();
    await this.getProject();
  }

 async getEmployees() {
    this.EmployeeSevice.getEmployees(
    ).subscribe(employee => {
      this.employeeList = employee;
      console.log(this.employeeList);
    });
    console.log(this.employee);
  }

  async getProject() {

    this.ProjectService.getProject(this.data.id)
      .subscribe(proj => {
          this.project = proj;
          console.log(this.project);
          for(let i = 0; i < this.employeeList.length; i++) {
            if (this.project.projectManagerName === this.employeeList[i].firstName) {
              this.ManagerId = this.employeeList[i].id;
              console.log(this.ManagerId);
            }
          }
          this.createForm();
        }
      );

  }

  createForm(): void {
    this.updateForm = new FormGroup({
      name: new FormControl(this.project.name, [Validators.required]),
      projectManagerId: new FormControl(this.ManagerId, [Validators.required]),
      totalHour: new FormControl(this.project.totalHour, [Validators.required]),
      description: new FormControl(this.project.description, [Validators.required]),
    });
  }
}
