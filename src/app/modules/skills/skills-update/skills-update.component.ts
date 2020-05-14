import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SkillsService } from '../../../../shared/services/skills.service';
import { FormGroup, FormControl, Validators, FormArray, FormsModule } from '@angular/forms';

import { GroupSkillsService } from 'src/shared/services/Groupskill.service';
interface skillGroup {
  value: Number;
  viewValue: string;
}
@Component({
  selector: 'app-skills-update',
  templateUrl: './skills-update.component.html',
  styleUrls: ['./skills-update.component.css']
})
export class SkillsUpdateComponent implements OnInit {
  nameSkill: string;
  descriptionSkill: String;
  updateForm : FormGroup;
  groupId: Number;
  skillGroups;
  skill;
  
  constructor(
    private SkillsService: SkillsService,
    private GroupSkillService: GroupSkillsService,
    public dialogRef: MatDialogRef<SkillsUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  submit(): void {

    this.SkillsService.updateSkills(this.data.id,{ 
      id:this.data.id,
      name:this.updateForm.value.name,
      groupSkillId:this.updateForm.value.groupSkillId,
      
    }).subscribe(status =>{
      this.onNoClick();
    }
     );
   
  }
  ngOnInit(): void {
    this.getGroupList();
    this.getSkill();
  }
  getGroupList() {
    this.GroupSkillService.getGroups().subscribe(groups => { this.skillGroups = groups });
  }

  getSkill(): void {
 
    this.SkillsService.getSkillsbyId(this.data.id)
      .subscribe(skill => {
        this.skill = skill;
        console.log("test");
        console.log(this.skill);
        this.createForm();
      }
        );
      
  }

  createForm(): void {
    this.updateForm = new FormGroup({
      name: new FormControl(this.skill.name, [Validators.required]),
      groupSkillId: new FormControl(this.skill.groupSkillId, [Validators.required]),
  });
  }
}
