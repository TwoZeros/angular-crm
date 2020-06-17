import {Employee} from '../models/employee'
//import {EMPLOYEES} from '../mock-employees'
import { Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardResourceService {
  public uri = 'https://edupulse.ru/api/ScheduleResource';
  constructor(private http: HttpClient){ }

  getAllResource(): Observable<any> {

    return this.http.get(this.uri+"/getAll");
  }
  findByPeriod(startTime, endTime): Observable<any> {

    return this.http.get(this.uri+"/getWorksInPeriod?Start="+startTime+"&End="+endTime);
  }
  findByPeriodAndSkill(startTime,endTime, skills): Observable<any> {
    return this.http.post(this.uri+"/getEmployeeWithSkill?Start="+startTime+"&End="+endTime, skills)
  }
  getPeopleFromDepartments(startTime,endTime, departments): Observable<any> {
    return this.http.post(this.uri+"/getPeopleFromDepartments?Start="+startTime+"&End="+endTime, departments)
  }


}
