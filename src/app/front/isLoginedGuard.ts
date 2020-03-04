import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";

@Injectable()
export class isLoginedGuard implements CanActivate{
    constructor(public router: Router) {}
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean{
         
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