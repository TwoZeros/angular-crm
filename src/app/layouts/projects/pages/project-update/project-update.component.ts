import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ProjectService} from "../../../../../shared/services/project.service";
import {EmployeeService} from "../../../../../shared/services/employee.service";
import {tap} from "rxjs/operators";
import {ClientService} from "../../../../../shared/services/client.services";

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
  employ;
  clientId;
  clientList;
  clientTemp;

  constructor(
    private ProjectService: ProjectService,
    private EmployeeSevice: EmployeeService,
    private ClientService: ClientService,
    public dialogRef: MatDialogRef<ProjectUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  submit(): void {

    this.ProjectService.updateProject(this.data.id,{
      id: +this.data.id,
      name: this.updateForm.value.name,
      projectManagerId: +this.updateForm.value.projectManagerId,
      projectClientId: +this.updateForm.value.projectClientId,
      totalHour: this.updateForm.value.totalHour,
      description: this.updateForm.value.description,


    }).subscribe(status =>{
        this.onNoClick();
      }
    );

  }
  async ngOnInit() {
    await this.getProject();
  }
  getEmployees() {
    this.EmployeeSevice.getEmployees(
    ).subscribe(employee => {
      this.employeeList = employee;
      console.log(this.employeeList);
      for(this.employ of this.employeeList) {
        if (this.project.projectManagerName === this.employ.secondName + ' ' + this.employ.firstName) {
          this.ManagerId = this.employ.id;
          console.log(this.ManagerId);
          this.createForm();
        }
      }
    });
    console.log(this.employee);
  }
 getClient() {
    this.ClientService.getClients()
      .subscribe(client => {
        this.clientList = client;
        console.log(this.clientList);
        for(this.clientTemp of this.clientList) {
          if(this.project.projectClientName === this.clientTemp.fullName) {
            this.clientId = this.clientTemp.id;
            console.log(this.clientId);
            this.createForm();
          }
        }
      })
 }
  async  getProject() {
    this.ProjectService.getProject(this.data.id)
      .subscribe(proj => {
          this.project = proj;
          console.log(this.project);
          this.createForm();
          this.getEmployees();
          this.getClient();
        }
      );

  }

  createForm(): void {
    this.updateForm = new FormGroup({
      name: new FormControl(this.project.name, [Validators.required]),
      projectManagerId: new FormControl(this.ManagerId, [Validators.required]),
      projectClientId: new FormControl(this.clientId, [Validators.required]),
      totalHour: new FormControl(this.project.totalHour, [Validators.required]),
      description: new FormControl(this.project.description, [Validators.required]),
    });
  }
}
