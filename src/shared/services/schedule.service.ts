import { Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http';

import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  public uri = 'https://edupulse.ru/api/Shedules';
  constructor(private http: HttpClient){ }

  getSchedules(): Observable<any> {

    return this.http.get(this.uri);
  }

  getSchedulebyId(id: number): Observable<any> {

    return this.http.get(this.uri+"/"+id);
  }
  deleteSchedule(id: number): Observable<any> {

    return this.http.delete(this.uri+"/"+id);
  }

  addSchedule(schedule: object): Observable<any> {

    return this.http.post(this.uri,schedule);
  }

  updateSchedule(id,schedule: object): Observable<any> {

    return this.http.put(this.uri+"/"+id,schedule);
  }

}

