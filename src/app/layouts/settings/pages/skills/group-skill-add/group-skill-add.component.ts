import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SkillsService } from 'src/shared/services/skills.service';
import { NgForm } from '@angular/forms';
import { GroupSkillsService } from 'src/shared/services/Groupskill.service';
interface skillGroup {
  value: Number;
  viewValue: string;
}
@Component({
  selector: 'app-group-skill-add',
  templateUrl: './group-skill-add.component.html',
  styleUrls: ['./group-skill-add.component.css']
})
export class GroupSkillAddComponent implements OnInit {
  nameGroup: string;
  
  constructor(
    private SkillsService: SkillsService,
    private GroupSkillService: GroupSkillsService,
    public dialogRef: MatDialogRef<GroupSkillAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onSubmit(form: NgForm) {
    this.GroupSkillService.addGroupSkill({
      name: this.nameGroup,
 
    }).subscribe(status => {

    })
  }
  ngOnInit(): void {
 
  }
 
}
