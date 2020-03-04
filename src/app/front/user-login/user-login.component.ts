import { Component, OnInit } from '@angular/core';
import {AuthorisationService} from '../../../shared/services/authorisation.service'
import {AuthToken} from '../../../shared/models/authToken';

import { Router } from '@angular/router';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  username: string;
  password: string;
  token : AuthToken;
  done: boolean;
  error: string;
  constructor(private AuthorisationService: AuthorisationService,private router: Router ) { }
  login(): void {
    this.AuthorisationService.postLogin(this.username, this.password)
    .subscribe(data => {
      
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('userName', data.userName);
      this.router.navigate(['/front/dashboard']);
  },
  error => {
      this.error = "Ошибка";
  });
  }
  ngOnInit(): void {
  }

}
