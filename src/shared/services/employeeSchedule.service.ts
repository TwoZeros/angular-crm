import { Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http';

import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EmployeeScheduleService {
  public uri = 'https://edupulse.ru/api/EmployeeShedules';
  constructor(private http: HttpClient){ }

  getEmployeeSchedules(): Observable<any> {

    return this.http.get(this.uri);
  }
  getEmployeeSchedulebyId(id: number): Observable<any> {

    return this.http.get(this.uri+"/"+id);
  }
  getEmployeeSchedulebyIdEmployee(id: number): Observable<any> {

    return this.http.get(this.uri+"/employee/"+id);
  }
  deleteEmployeeSchedule(id: number): Observable<any> {

    return this.http.delete(this.uri+"/"+id);
  }

  addEmployeeSchedule(schedule: object): Observable<any> {

    return this.http.post(this.uri, schedule);
  }

  updateEmployeeSchedule(id,schedule: object): Observable<any> {

    return this.http.put(this.uri+"/"+id,schedule);
  }

}

