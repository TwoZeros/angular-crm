import {Component, Inject, OnInit} from '@angular/core';
import {SkillsService} from "../../../../../../shared/services/skills.service";
import {GroupSkillsService} from "../../../../../../shared/services/Groupskill.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {NgForm} from "@angular/forms";
import {DepartmentService} from "../../../../../../shared/services/department.service";
interface DepartGroup {
  value: Number;
  viewValue: string;
}
@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.css']
})
export class DepartmentAddComponent implements OnInit {
  nameDepartment: string;
  DepartGroup;

  constructor(
    private DepartmentService: DepartmentService,
    public dialogRef: MatDialogRef<DepartmentAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onSubmit(form: NgForm) {
    this.DepartmentService.addDepartment({
      name: this.nameDepartment,
    }).subscribe(status => {

    })
  }
  ngOnInit(): void {
  }


}
