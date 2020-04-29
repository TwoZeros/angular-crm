import { Component, OnInit } from '@angular/core';
import { Client } from 'src/shared/models/Client';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/shared/services/client.services';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.css']
})
export class ClientUpdateComponent implements OnInit {

  client: Client
  fullname: string
  phoneNumber: string
  email: string
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private clientService: ClientService,
    private location: Location,
  ) { }

  goBack() {
    this.location.back();

  }
  ngOnInit(): void {

  }
  // getClient() : void
  // {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.clientService.getClient(id)
  //     .subscribe(client => {
  //       this.client = client}
  //       );
  // }
  SumbitUpdateClient(form: NgForm) : void
  {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.clientService.updateClient(id, {
      fullname: this.fullname,
      phoneNumber: this.phoneNumber,
      email: this.email
    }).subscribe(status => {
      this.router.navigate(
       ['/client/:id']
      );
    })
  }
  add() {

  }

}
