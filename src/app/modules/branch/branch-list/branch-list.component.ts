import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {Router} from '@angular/router';
import { branchsList } from 'src/shared/models/branchsList';
import { BranchService } from 'src/shared/services/branch.service';
import { Branch } from 'src/shared/models/branch';

@Component({
  selector: 'app-branch-list',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.css']
})
export class BranchListComponent implements OnInit {

  dataSource ;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  displayedColumns: string[] = ['id', 'name', 'companyName']
  branchs : branchsList[]
  constructor(private ClientService: BranchService,private router: Router) { }
  getBranchs(): void {
    this.ClientService.getBranchs()
                        .subscribe(branchs => {

                          this.branchs = branchs
                          this.dataSource = new MatTableDataSource<branchsList>(this.branchs);
                          this.dataSource.paginator = this.paginator;
                         });
  }
  onRowClicked(row : Branch) {
    this.router.navigate(
      ['/branch', row.id],
    );
    console.log('Row clicked: ', row);
}
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

  ngOnInit(): void {
    this.getBranchs();
  }

}
