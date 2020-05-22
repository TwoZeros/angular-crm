import { Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public uri = 'https://edupulse.ru/api/Users';
  constructor(private http: HttpClient){ }

  getAll(): Observable<any> {

    return this.http.get(this.uri);
  }

  getById(id: number): Observable<any> {


    return this.http.get(this.uri+"/"+id);
  }
  delete(id: number): Observable<any> {

    return this.http.delete(this.uri+"/"+id);
  }

  add(department: object): Observable<any> {

    return this.http.post(this.uri,department);
  }

  update(id,user: object): Observable<any> {
    return this.http.put(this.uri+"/"+id,user);
  }



}
