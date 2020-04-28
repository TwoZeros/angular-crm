import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import {AuthToken} from '../models/authToken';
import {Router} from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class AuthorisationService {
  public uri = 'http://ec2-13-59-245-120.us-east-2.compute.amazonaws.com:5000/';
  public token;
  constructor(private http: HttpClient, public router: Router) { }

  postLogin(username, password): Observable<any>{
    var formData: any = new FormData();
  formData.append("username",username);
  formData.append("password", password);
    return this.http.post(this.uri + '/token', formData); 
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/front/login']);

  }
  isLoginedUser(): boolean {
    const jwt = localStorage.getItem('accessToken');
       
        if (!!jwt) {
            return true;
        }
        else{
            this.router.navigate(['/front/login']);
            return false;
        }
  }


}
