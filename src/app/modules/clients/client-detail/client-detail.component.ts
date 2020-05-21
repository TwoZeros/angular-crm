import { Component, OnInit,Inject } from '@angular/core';
import { NgForm} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Router} from '@angular/router';
import { ClientService }  from '../../../../shared/services/client.services';
import { Client } from '../../../../shared/models/client';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CommentService } from 'src/shared/services/comment.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {

  client : Client
  photo: string;
  CarmaComment:number;
  TextComment:string;
  Comments:any;
  DataChart:any;
  constructor(
    private spinner: NgxSpinnerService,
    private router: Router,
  private route: ActivatedRoute,
  private ClientService: ClientService,
  private CommentService: CommentService,
  private location: Location,
  ) { }


  ngOnInit(): void {
    this.spinner.show();
    this.getClient();
    this.getComments();
    this.getDateForChart();
  }


  getClient(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.ClientService.getClient(id)
      .subscribe(client => {
        this.client = client
      this.spinner.hide()}
        );

  }
  getDateForChart():void {
    this.CommentService.getRatingClientByDay(+this.route.snapshot.paramMap.get('id'))
      .subscribe(DataChart => {
        this.DataChart = DataChart}
        );
  }
  addComment() {
    this.CommentService.addComment({
      ClientId:Number(this.route.snapshot.paramMap.get('id')),
      userId:1,
      karma:this.CarmaComment,
      text:this.TextComment
    }).subscribe(res=>{
      this.TextComment="";
      this.CarmaComment=0;
      this.getComments()});
  }
getComments() {
  this.CommentService.getCommentsbyIdClinet(Number(this.route.snapshot.paramMap.get('id')))
  .subscribe(res=> {
    let Comments=res
  this.Comments = Comments.reverse() });
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

  deleteComment(id: number): void{
    var conf =  confirm("Вы действительно хотите удалить комментарий?")
    if(conf) {
      this.CommentService.deleteComment(id).subscribe(status=> {
        this.getComments();
       
      })
    }
  }
}
