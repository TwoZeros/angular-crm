import { Component, OnInit, ViewChild } from '@angular/core';
import {SkillsService} from '../../../../shared/services/skills.service'
import { Skills } from '../../../../shared/models/skills';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {Router} from '@angular/router';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsListComponent implements OnInit {

  dataSource ;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  displayedColumns: string[] = ['id', 'name', 'description', 'groupId']
  skills : Skills[]
  constructor(private EmployeeService: SkillsService,private router: Router) { }
  getSkills(): void {
    this.EmployeeService.getSkills()
                        .subscribe(skills => {

                          this.skills = skills
                          this.dataSource = new MatTableDataSource<Skills>(this.skills);
                          this.dataSource.paginator = this.paginator;
                         });
  }
  onRowClicked(row : Skills) {
    this.router.navigate(
      ['/employee', row.id],
    );
    console.log('Row clicked: ', row);

}
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}
  ngOnInit(): void {
    this.getSkills()
    //this.dataSource = new MatTableDataSource<EmployeeList>(this.employees);
    //this.dataSource.paginator = this.paginator;



  }

}
