import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {MatTableDataSource} from "@angular/material/table";
import {userList} from "../../../../../../shared/models/userList";

import {UserAddComponent} from "../user-add/user-add.component";
import {UserUpdateComponent} from "../user-update/user-update.component";
import { UserService } from 'src/shared/services/user.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  dataSourceUser;
  displayedColumns: string[] = ['id', 'name','role','actions']
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild('TableUserPaginator', {static: true}) tableUserPaginator: MatPaginator;
  @ViewChild('TableUserSort', {static: true}) tableUserSort: MatSort;



  users: userList[]
  constructor(private UserService: UserService,
              private router: Router,
              public dialog: MatDialog,
              private spinner: NgxSpinnerService,) { }
  getUsers(): void {
    this.UserService.getAll()
      .subscribe(users => {
        this.users = users
        this.dataSourceUser = new MatTableDataSource<userList>(this.users);
        this.dataSourceUser.paginator = this.tableUserPaginator;
        this.dataSourceUser.sort = this.tableUserSort;
        this.spinner.hide();
      });
  }

  create(): void {
    const dialogRef = this.dialog.open(UserAddComponent, {
      width: '500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getUsers()
    });
  }
  update(id :number): void {
    const dialogRef = this.dialog.open(UserUpdateComponent, {
      width: '500px',
      data: {id : id}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getUsers()
    });
  }

  delete(id: number) {

    if(confirm("Вы хотите удалить данного пользователя?")) {  
      if(id==1) {
        alert("Вы не можете удалить данного пользователя");
        return 0;
      }
      this.UserService.delete(id).subscribe(result=> {
        console.log(result);
        this.getUsers();
      })
    }

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceUser.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.spinner.show();
    this.getUsers()
  }

}


