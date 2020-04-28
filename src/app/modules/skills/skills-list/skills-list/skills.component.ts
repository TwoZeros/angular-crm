import { Component, OnInit, ViewChild } from '@angular/core';
import { SkillsService } from '../../../../../shared/services/skills.service'
import { SkillsList } from '../../../../../shared/models/skillsList';
import { SkillsAddComponent } from '../../skills-add/skills-add.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsListComponent implements OnInit {

  dataSource;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  displayedColumns: string[] = ['id', 'name', 'groupName', 'actions']
  skills: SkillsList[]
  constructor(private EmployeeService: SkillsService, 
              private router: Router,
              public dialog: MatDialog) { }
  getSkills(): void {
    this.EmployeeService.getSkills()
      .subscribe(skills => {
        console.log(skills)
        this.skills = skills
        this.dataSource = new MatTableDataSource<SkillsList>(this.skills);
        this.dataSource.paginator = this.paginator;
      });
  }
  createSkill(): void {
    const dialogRef = this.dialog.open(SkillsAddComponent, {
      width: '500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getSkills()
    });
  }
  deleteSkill(idSkill: number) {
    
    if(confirm("Вы хотите удалить данный навык?")) {
      this.EmployeeService.deleteSkills(idSkill).subscribe(result=> {
        console.log(result);
        this.getSkills();
      })
    }
   
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
