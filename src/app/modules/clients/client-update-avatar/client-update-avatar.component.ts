import { Component, OnInit } from '@angular/core';
import { Client } from 'src/shared/models/client';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/shared/services/client.services';
import { Location } from '@angular/common';

@Component({
  selector: 'app-client-update-avatar',
  templateUrl: './client-update-avatar.component.html',
  styleUrls: ['./client-update-avatar.component.css']
})
export class ClientUpdateAvatarComponent implements OnInit {


  client: Client
  photo: string
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private clientService: ClientService,
    private location: Location,
  ) { }

  ngOnInit(): void {
  }

}
