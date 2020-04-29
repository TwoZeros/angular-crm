import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  @ViewChild("fileUpload", {static:false})
  fileUpload: ElementRef;
  files=[]
  client: Client
  photo: string
  currentIdClient: number
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private clientService: ClientService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.currentIdClient = +this.route.snapshot.paramMap.get('id');
    this.getClient();
  }

  getClient() : void {
    this.clientService.getClient(this.currentIdClient)
    .subscribe(client=> {
      this.client = client
    });
  }
  codingFile(file) {


    var srcData;


    var reader = new FileReader();

    reader.onloadend = function (fileLoadedEvent) {
      srcData = "" + fileLoadedEvent.target.result;
      var image = document.getElementsByClassName('avatar')[0];
      image.setAttribute('src', srcData);
      image.setAttribute('width', '400');

    }

    reader.readAsDataURL(file);

  }
  upload() {
    var image = document.getElementsByClassName('avatar')[0];
    var dataSrc = image.getAttribute('src');
    this.clientService.uploadAvatarClient(this.currentIdClient, {
      id: this.currentIdClient,
      photo: dataSrc
    }).subscribe(status => {

      this.router.navigate(
        ['/client', this.currentIdClient]
      );
    })
  }
  onClick() {
    const fileUpload = this.fileUpload.nativeElement;
    fileUpload.onchange = () => {
      const file = fileUpload.files[0];
      this.codingFile(file);
    };
    fileUpload.click();
  }
}
