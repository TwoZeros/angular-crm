import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SkillsService } from '../../../../shared/services/skills.service';
import { NgForm } from '@angular/forms';
import { GroupSkillsService } from 'src/shared/services/Groupskill.service';
import { EmployeeSkillsService } from 'src/shared/services/employeeSkills.service';
interface skillGroup {
  value: Number;
  viewValue: string;
}
@Component({
  selector: 'app-employee-skill-add',
  templateUrl: './employee-skill-add.component.html',
  styleUrls: ['./employee-skill-add.component.css']
})
export class EmployeeSkillAddComponent implements OnInit {
  knowledgeLevelId: Number;
  skills;
  skillId;

  constructor(
    private SkillsService: SkillsService,
    private GroupSkillService: GroupSkillsService,
    private EmployeeSkillsService: EmployeeSkillsService,
    public dialogRef: MatDialogRef<EmployeeSkillAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onSubmit(form: NgForm) {
    console.log(this.data.employeeId);
    this.EmployeeSkillsService.addEmployeeSkills({
      employeeId : +this.data.employeeId,
      skillId: this.skillId,
      knowledgeLevelId: Number(Number(this.knowledgeLevelId)),
    }).subscribe(status => {

    })
  }
  ngOnInit(): void {
    this.getSkills()
  }
  getSkills() {
    this.SkillsService.getSkills().subscribe(skills => { this.skills = skills });
  }
}
