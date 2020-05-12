import { Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http';

import { Injectable } from '@angular/core';
import { delay } from 'rxjs/internal/operators/delay';
import { company } from '../models/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  public uri = 'https://localhost:44304/api/Companies';
  constructor(private http: HttpClient){ }

  getCompanies(): Observable<any> {

    return this.http.get(this.uri);
  }

  getCompany(id: number): Observable<any> {


    return this.http.get(this.uri+"/"+id);
  }
  deleteCompany(id: number): Observable<any> {

    return this.http.delete(this.uri+"/"+id);
  }

  addCompany(company: object): Observable<any> {

    return this.http.post(this.uri,company);
  }

  updateCompany(id,company: object): Observable<any> {
console.log(company);
    return this.http.put(this.uri+"/"+id,company);
  }




}
