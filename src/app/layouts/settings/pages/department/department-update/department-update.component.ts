import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DepartmentService} from "../../../../../../shared/services/department.service";
interface DepartmentGroup {
  value: Number;
  viewValue: string;
}
@Component({
  selector: 'app-department-update',
  templateUrl: './department-update.component.html',
  styleUrls: ['./department-update.component.css']
})
export class DepartmentUpdateComponent implements OnInit {

  nameDepartment: string;
  updateForm : FormGroup;
  DepartmentGroup;
  department;

  constructor(
    private DepartmentService: DepartmentService,
    public dialogRef: MatDialogRef<DepartmentUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  submit(): void {

    this.DepartmentService.updateDepartment(this.data.id,{
      id:this.data.id,
      name:this.updateForm.value.name,


    }).subscribe(status =>{
        this.onNoClick();
      }
    );

  }
  ngOnInit(): void {
    this.getDepartments();
  }


  getDepartments(): void {

    this.DepartmentService.getDepartment(this.data.id)
      .subscribe(depart => {
          this.department = depart;
          console.log("test");
          console.log(this.department);
          this.createForm();
        }
      );

  }

  createForm(): void {
    this.updateForm = new FormGroup({
      name: new FormControl(this.department.name, [Validators.required]),
    });
  }

}
