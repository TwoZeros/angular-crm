import { Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http';

import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EmployeeSkillsService {
  public uri = 'https://edupulse.ru/api/EmployeeSkills';
  constructor(private http: HttpClient){ }

  getEmployeeSkills(): Observable<any> {

    return this.http.get(this.uri);
  }
  getEmployeeSkillsbyEmployeeId(id:number ): Observable<any> {


    return this.http.get(this.uri+"/employee/"+id);
  }
  getEmployeeSkillsbyId(id: number): Observable<any> {


    return this.http.get(this.uri+"/"+id);
  }
  deleteEmployeeSkills(id: number): Observable<any> {

    return this.http.delete(this.uri+"/"+id);
  }

  addEmployeeSkills(skills: object): Observable<any> {

    return this.http.post(this.uri,skills);
  }

  updateEmployeeSkills(id,employeeSkills: object): Observable<any> {
    return this.http.put(this.uri+"/"+id,employeeSkills);
  }

}

