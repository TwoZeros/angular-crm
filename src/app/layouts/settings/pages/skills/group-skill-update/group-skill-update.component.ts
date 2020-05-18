import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SkillsService } from '../../../../../../shared/services/skills.service';
import { FormGroup, FormControl, Validators, FormArray, FormsModule } from '@angular/forms';

import { GroupSkillsService } from 'src/shared/services/Groupskill.service';
interface skillGroup {
  value: Number;
  viewValue: string;
}
@Component({
  selector: 'app-group-skill-update',
  templateUrl: './group-skill-update.component.html',
  styleUrls: ['./group-skill-update.component.css']
})
export class GroupSkillsUpdateComponent implements OnInit {
  nameSkill: string;
  descriptionSkill: String;
  updateForm : FormGroup;
  groupId: Number;
  skillGroups;
  group;
  
  constructor(
    private SkillsService: SkillsService,
    private GroupSkillService: GroupSkillsService,
    public dialogRef: MatDialogRef<GroupSkillsUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  submit(): void {

    this.GroupSkillService.updateGroupSkill(this.data.id,{ 
      id:this.data.id,
      name:this.updateForm.value.name,
      
    }).subscribe(status =>{
      this.onNoClick();
    }
     );
   
  }
  ngOnInit(): void {
    this.getGroup();
  }

  getGroup(): void {
 
    this.GroupSkillService.getGroupsSkillbyId(this.data.id)
      .subscribe(group => {
        this.group = group;
        this.createForm();
      }
        );
      
  }

  createForm(): void {
    this.updateForm = new FormGroup({
      name: new FormControl(this.group.name, [Validators.required]),
  });
  }
}
