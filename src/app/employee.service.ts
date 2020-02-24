import {Employee} from './employee'
import {EMPLOYEES} from './mock-employees'
import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  getEmployees(): Observable<Employee[]> {
    
    return of(EMPLOYEES)
  }
  constructor() { }
}
