
import { Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  public uri = 'https://edupulse.ru/api/Client';
  constructor(private http: HttpClient){ }

  getClients(): Observable<any> {

    return this.http.get(this.uri);
  }

  getClient(id: number): Observable<any> {


    return this.http.get(this.uri+"/"+id);
  }
  deleteClient(id: number): Observable<any> {

    return this.http.delete(this.uri+"/"+id);
  }

  addClient(Client: object): Observable<any> {

    return this.http.post(this.uri,Client);
  }

  updateClient(id,client: object): Observable<any> {
console.log(client);
    return this.http.put(this.uri+"/"+id,client);
  }

  uploadAvatarClient(id, client: object): Observable<any> {
    console.log(client);
    var uri=this.uri+"/"+id+"/upload-avatar"
        return this.http.put(uri,client);
      }


}
