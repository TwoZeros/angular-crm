import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable()
export class ParamInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const jwt = localStorage.getItem('accessToken');
   
        if (!!jwt) {
         req = req.clone({
           setHeaders: {
             Authorization: `Bearer ${jwt}`
           }
         });
       }
       return next.handle(req);
     }
}