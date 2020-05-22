import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { UserService } from 'src/shared/services/user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  updateForm : FormGroup;
  user;

  constructor(
    private UserService: UserService,
    public dialogRef: MatDialogRef<UserUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  submit(): void {

    this.UserService.update(this.data.id,{
      id:this.data.id,
      login:this.updateForm.value.login,
      role:this.updateForm.value.role,
      password:this.updateForm.value.password

    }).subscribe(status =>{
        this.onNoClick();
      }
    );

  }
  ngOnInit(): void {
    this.getUser();
  }


  getUser(): void {

    this.UserService.getById(this.data.id)
      .subscribe(user => {
          this.user = user;
          console.log(this.user);
          this.createForm();
        }
      );

  }

  createForm(): void {
    this.updateForm = new FormGroup({
      login: new FormControl(this.user.login, [Validators.required]),
      role: new FormControl(this.user.role, [Validators.required]),
      password: new FormControl(this.user.password, [Validators.required]),
    });
  }

}
