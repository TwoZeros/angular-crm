import {Skills} from '../models/skills'
import { Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http';

import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  public uri = 'https://localhost:44334/api/Skills';
  constructor(private http: HttpClient){ }

  getSkills(): Observable<any> {

    return this.http.get(this.uri);
  }

  getSkillsbyId(id: number): Observable<any> {


    return this.http.get(this.uri+"/"+id);
  }
  deleteSkills(id: number): Observable<any> {

    return this.http.delete(this.uri+"/"+id);
  }

  addSkills(skills: object): Observable<any> {

    return this.http.post(this.uri,skills);
  }

  updateSkills(id,skills: object): Observable<any> {
console.log(skills);
    return this.http.put(this.uri+"/"+id,skills);
  }

}

