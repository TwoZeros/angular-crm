import {Employee} from '../models/employee'

import { Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  public uri = 'https://edupulse.ru/api/Comments';
  constructor(private http: HttpClient){ }

  getComments(): Observable<any> {

    return this.http.get(this.uri);
  }
  getCommentsbyIdClinet(id : number):Observable<any> {

    return this.http.get(this.uri+"/client/"+id);
  }

  getComment(id: number): Observable<any> {


    return this.http.get(this.uri+"/"+id);
  }
  deleteComment(id: number): Observable<any> {

    return this.http.delete(this.uri+"/"+id);
  }

  addComment(comment: object): Observable<any> {

    return this.http.post(this.uri,comment);
  }

  updateComment(id,comment: object): Observable<any> {
console.log(comment);
    return this.http.put(this.uri+"/"+id,comment);
  }

  uploadAvatarEmployee(id, employee: object): Observable<any> {
    console.log(employee);
    var uri=this.uri+"/"+id+"/upload-avatar"
        return this.http.put(uri,employee);
      }


}
