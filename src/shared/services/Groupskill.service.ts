import { Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http';

import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GroupSkillsService {
  public uri = 'https://api.kronx.ru/api/GroupSkills';
  constructor(private http: HttpClient){ }

  getGroups(): Observable<any> {

    return this.http.get(this.uri);
  }

  getGroupsSkillbyId(id: number): Observable<any> {
    return this.http.get(this.uri+"/"+id);
  }
  deleteGroupSkill(id: number): Observable<any> {

    return this.http.delete(this.uri+"/"+id);
  }

  addGroupSkill(skills: object): Observable<any> {

    return this.http.post(this.uri,skills);
  }

  updateGroupSkill(id,skills: object): Observable<any> {
console.log(skills);
    return this.http.put(this.uri+"/"+id,skills);
  }

}

