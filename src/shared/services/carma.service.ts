import { Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarmaService {
  public uri = 'https://edupulse.ru/api/CarmaUsers';

  constructor(private http: HttpClient) {
  }

  GetCarmaByNumber(id: number): Observable<any> {
    return this.http.get(this.uri + '/GetCarmaByNumber/' + id);
  }
}
