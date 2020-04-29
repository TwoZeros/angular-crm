import {Employee} from '../models/employee'
//import {EMPLOYEES} from '../mock-employees'
import { Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  public uri = 'http://ec2-34-201-245-214.compute-1.amazonaws.com/api/Employees';
  constructor(private http: HttpClient){ }

  getEmployees(): Observable<any> {

    return this.http.get(this.uri);
  }

  getEmployee(id: number): Observable<any> {


    return this.http.get(this.uri+"/"+id);
  }
  deleteEmployee(id: number): Observable<any> {

    return this.http.delete(this.uri+"/"+id);
  }

  addEmployee(employee: object): Observable<any> {

    return this.http.post(this.uri,employee);
  }

  updateEmployee(id,employee: object): Observable<any> {
console.log(employee);
    return this.http.put(this.uri+"/"+id,employee);
  }

  uploadAvatarEmployee(id, employee: object): Observable<any> {
    console.log(employee);
    var uri=this.uri+"/"+id+"/upload-avatar"
        return this.http.put(uri,employee);
      }


}
