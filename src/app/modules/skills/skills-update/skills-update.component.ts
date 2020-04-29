import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SkillsService } from '../../../../shared/services/skills.service';
import { NgForm } from '@angular/forms';
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
  groupId: Number;
  skillGroups;
  
  constructor(
    private EmployeeService: SkillsService,
    private GroupSkillService: GroupSkillsService,
    public dialogRef: MatDialogRef<SkillsUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onSubmit(form: NgForm) {
    this.EmployeeService.addSkills({
      name: this.nameSkill,
      middleName: this.descriptionSkill,
      groupSkillId: Number(Number(this.groupId)),
    }).subscribe(status => {

    })
  }
  ngOnInit(): void {
    this.getGroupList()
  }
  getGroupList() {
    this.GroupSkillService.getGroups().subscribe(groups => { this.skillGroups = groups });
  }
}
