import { Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  public uri = 'https://api.kronx.ru/api/Projects';

  constructor(private http: HttpClient) {
  }

  getProjects(): Observable<any> {

    return this.http.get(this.uri);
  }

  getProject(id: number): Observable<any> {
    return this.http.get(this.uri + "/" + id);
  }

  deleteProject(id: number): Observable<any> {

    return this.http.delete(this.uri + "/" + id);
  }

  addProject(Project: object): Observable<any> {

    return this.http.post(this.uri, Project);
  }

  updateProject(id: number, Project: object): Observable<any> {
    console.log(Project);
    return this.http.put(this.uri + "/" + id, Project);
  }
}
