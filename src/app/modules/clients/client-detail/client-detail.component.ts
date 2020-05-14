import { Component, OnInit,Inject } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Router} from '@angular/router';
import { ClientService }  from '../../../../shared/services/client.services';
import { Client } from '../../../../shared/models/client';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {

  client : Client
  photo: string;
  constructor(
    private router: Router,
  private route: ActivatedRoute,
  private ClientService: ClientService,
  private location: Location,
  ) { }


  ngOnInit(): void {
    this.getClient();
  }


  getClient(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.ClientService.getClient(id)
      .subscribe(client => {
        this.client = client}
        );

  }
  delete(id: number): void{
    var conf =  confirm("Вы действительно хотите удалить клиента?")
    if(conf) {
      this.ClientService.deleteClient(id).subscribe(status=> {

        this.router.navigate(
          ['/clients']
        );
      })
    }
  }
}
