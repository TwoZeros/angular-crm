import { Component, OnInit, ViewChild } from '@angular/core';
import {ClientService} from '../../../../shared/services/client.services';
import { Client } from      '../../../../shared/models/client';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {Router} from '@angular/router';
import { clientList } from 'src/shared/models/clientList';
@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {
  dataSource ;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  displayedColumns: string[] = ['id', 'fullname', 'created']
  clients : clientList[]
  constructor(private ClientService: ClientService,private router: Router) { }
  getClients(): void {
    this.ClientService.getClients()
                        .subscribe(clients => {

                          this.clients = clients
                          this.dataSource = new MatTableDataSource<clientList>(this.clients);
                          this.dataSource.paginator = this.paginator;
                         });
  }
  onRowClicked(row : Client) {
    this.router.navigate(
      ['/client', row.id],
    );
    console.log('Row clicked: ', row);
}
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}
  ngOnInit(): void {
    this.getClients()
    //this.dataSource = new MatTableDataSource<ClientList>(this.employees);
    //this.dataSource.paginator = this.paginator;



  }
}
