import { Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  public uri = 'https://api.kronx.ru/api/BranchCompanies';
  constructor(private http: HttpClient){ }

  getDepartments(): Observable<any> {

    return this.http.get(this.uri);
  }

  getDepartment(id: number): Observable<any> {


    return this.http.get(this.uri+"/"+id);
  }
  deleteDepartment(id: number): Observable<any> {

    return this.http.delete(this.uri+"/"+id);
  }

  addDepartment(department: object): Observable<any> {

    return this.http.post(this.uri,department);
  }

  updateDepartment(id,department: object): Observable<any> {
    console.log(department);
    return this.http.put(this.uri+"/"+id,department);
  }



}
