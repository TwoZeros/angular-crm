import { Component, OnInit, Inject } from '@angular/core';
import { NgForm} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Router} from '@angular/router';
import { ClientService } from '../../../../shared/services/client.services';
import { Client } from '../../../../shared/models/client';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CommentService } from 'src/shared/services/comment.service';
import {keyframes, style, transition, animate, trigger} from "@angular/animations";
import {CarmaService} from "../../../../shared/services/carma.service";

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css'],
  animations : [
    trigger('counting', [
      transition('* => *',
        animate('1000ms', keyframes([
          style({width: '1%'}),
          style({width: '{{max_call}}%'}),
        ])
        ), {params: {max_call: '2'}})
    ])
    ]

})
export class ClientDetailComponent implements OnInit {
  title: string;
  percent: number;
  FullCarma: number;
  client: Client;
  photo: string;
  CarmaComment: number;
  TextComment: string;
  Comments: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ClientService: ClientService,
    private CommentService: CommentService,
    private CarmaService: CarmaService,
    private location: Location,
  ) { }


  ngOnInit(): void {
    this.getClient();
    this.getComments();

  }


  getClient(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.ClientService.getClient(id)
      .subscribe(client => {
        this.client = client; }
        );
    this.getCarma(id);

  }
  addComment() {
    this.CommentService.addComment({
      ClientId: Number(this.route.snapshot.paramMap.get('id')),
      userId: 1,
      karma: this.CarmaComment,
      text: this.TextComment
    }).subscribe(res => {
      this.TextComment = '';
      this.CarmaComment = 0;
      this.getComments(); });
  }
getComments() {
  this.CommentService.getCommentsbyIdClinet(Number(this.route.snapshot.paramMap.get('id')))
  .subscribe(res => {
    const Comments = res;
    this.Comments = Comments.reverse(); });
}
  delete(id: number): void {
    const conf =  confirm('Вы действительно хотите удалить клиента?');
    if (conf) {
      this.ClientService.deleteClient(id).subscribe(status => {

        this.router.navigate(
          ['/clients']
        );
      });
    }
  }

  deleteComment(id: number): void {
    const conf =  confirm('Вы действительно хотите удалить комментарий?');
    if (conf) {
      this.CommentService.deleteComment(id).subscribe(status => {
        this.getComments();

      });
    }
  }
  getCarma(id: number) {
    this.CommentService.getRating(id).subscribe(rate => {
      this.FullCarma = rate;
      console.log(rate);
      this.CarmaService.GetCarmaByNumber(this.FullCarma)
        .subscribe(name => {
          this.title = name;
          console.log(name);
        });
      if (this.FullCarma > 0 ) {
        this.percent = 50 + (this.FullCarma / 200);
        console.log(this.percent);
      } else { this.percent = 50 - (-this.FullCarma / 200); }
    });
  }
}
