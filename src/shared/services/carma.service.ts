import { Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarmaService {
  public uri = 'https://api.kronx.ru/api/CarmaUsers';

  constructor(private http: HttpClient) {
  }
  getCarmas(): Observable<any> {

    return this.http.get(this.uri);
  }

  getCarma(id: number): Observable<any> {


    return this.http.get(this.uri+ "/" +id);
  }
  deleteCarma(id: number): Observable<any> {

    return this.http.delete(this.uri+"/"+id);
  }

  addCarma(Carma: object): Observable<any> {

    return this.http.post(this.uri, Carma);
  }

  updateCarma(id, Carma: object): Observable<any> {
    console.log(Carma);
    return this.http.put(this.uri + "/" + id, Carma);
  }

  GetCarmaByNumber(id: number): Observable<any> {
    return this.http.get(this.uri + '/GetCarmaByNumber/' + id);
  }
}
