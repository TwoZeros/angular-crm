import {Component, Inject, OnInit} from '@angular/core';
import {SkillsService} from "../../../../../../shared/services/skills.service";
import {GroupSkillsService} from "../../../../../../shared/services/Groupskill.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {NgForm} from "@angular/forms";
import { UserService } from 'src/shared/services/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  userLogin: string;
  userRole: string;
  userPassword: string;

  constructor(
    private UserService: UserService,
    public dialogRef: MatDialogRef<UserAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  
  }
  onSubmit(form: NgForm) {
    
    this.UserService.add({
      login: this.userLogin,
      role:this.userRole,
      password: this.userPassword
    }).subscribe(status => {

    })
  }
  ngOnInit(): void {
  }


}
