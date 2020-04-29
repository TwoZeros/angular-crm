import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {SkillsService  } from '../../../../shared/services/skills.service';
import { NgForm} from '@angular/forms';
interface skillGroup {
  value: Number;
  viewValue: string;
}
@Component({
  selector: 'app-skills-add',
  templateUrl: './skills-add.component.html',
  styleUrls: ['./skills-add.component.css']
})
export class SkillsAddComponent {
  nameSkill : string;
  descriptionSkill: String;
  groupId: Number;

  skillGroups: skillGroup[] = [
    {value: 1, viewValue: 'Разработка'},
    {value: 3, viewValue: 'Администрироывник'},
    {value: 5, viewValue: 'Маркетинг'}
  ];
  constructor(
    private EmployeeService: SkillsService, 
    public dialogRef: MatDialogRef<SkillsAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  onSubmit(form: NgForm){
    this.EmployeeService.addSkills({
          name: this.nameSkill,
          middleName: this.descriptionSkill, 
          groupSkillId: Number(this.groupId),
        }).subscribe(status=> {
      
         })
}

}
