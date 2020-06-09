import { Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http';

import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProjectWorkService {
  public uri = 'https://edupulse.ru/api/ProjectWorks';
  constructor(private http: HttpClient){ }

  getProjectWorks(): Observable<any> {

    return this.http.get(this.uri);
  }

  getProjectWorkbyId(id: number): Observable<any> {


    return this.http.get(this.uri+"/"+id);
  }
  deleteProjectWork(id: number): Observable<any> {

    return this.http.delete(this.uri+"/"+id);
  }

  add(ProjectWorks: object): Observable<any> {

    return this.http.post(this.uri,ProjectWorks);
  }

  update(id,projectWork: object): Observable<any> {
console.log(projectWork);
    return this.http.put(this.uri+"/"+id,projectWork);
  }

}

