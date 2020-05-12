
import { Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Branch } from '../models/branch';
import { delay } from 'rxjs/internal/operators/delay';

@Injectable({
  providedIn: 'root'
})
export class BranchService {
  public uri = 'https://localhost:44304/api/BranchCompanies';
  constructor(private http: HttpClient){ }

  getBranchs(): Observable<Branch[]> {

    return this.http.get<Branch[]>(this.uri);
  }

  getBranch(id: number): Observable<any> {


    return this.http.get(this.uri+"/"+id);
  }
  deleteBranch(id: number): Observable<any> {

    return this.http.delete(this.uri+"/"+id);
  }

  addBranch(Branch: object): Observable<any> {

    return this.http.post(this.uri,Branch);
  }

  updateBranch(id,Branch: object): Observable<any> {
console.log(Branch);
    return this.http.put(this.uri+"/"+id,Branch);
  }




}
