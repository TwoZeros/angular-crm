import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {Client} from '../../../../shared/models/Client'
import { NgForm} from '@angular/forms';
import {ClientService} from '../../../../shared/services/client.services'
import {Router} from '@angular/router';
@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css']
})
export class ClientAddComponent implements OnInit {
  client: Client;
  firstName : string;
  secondName: String;
  middleName: String;
  phoneNumber: String;
  email: String;
  birthDay: Date
  constructor(
    private router: Router,
    private ClientService: ClientService,
    private location: Location,
    ) { }

  ngOnInit(): void {
  }
  goBack() {
    this.location.back();

  }
  onSubmit(form: NgForm){
    this.ClientService.addClient({
          firstName: this.firstName,
          middleName: this.middleName,
          secondName: this.secondName,
          phoneNumber: this.phoneNumber,
          email: this.email,
          birthDay:this.birthDay}).subscribe(status=> {

            this.router.navigate(
              ['/clients']
            );
          })
}
  add() {

  }
}
