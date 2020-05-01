import { Component, OnInit, ViewChild } from '@angular/core';
import { SkillsService } from '../../../../../shared/services/skills.service'
import { SkillsList } from '../../../../../shared/models/skillsList';
import { SkillsAddComponent } from '../../skills-add/skills-add.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { GroupSkillsService } from 'src/shared/services/Groupskill.service';
import { GroupSkill } from 'src/shared/models/GroupSkill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsListComponent implements OnInit {

  dataSourceSkill;
  dataSourceGroup;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  displayedColumns: string[] = ['id', 'name', 'groupName', 'actions']
  displayedGroupColumns: string[] = ['id','name', 'action'];
  skills: SkillsList[]
  groups: GroupSkill[]
  constructor(private SkillsService: SkillsService, 
              private GroupSkillService: GroupSkillsService,
              private router: Router,
              public dialog: MatDialog) { }
  getSkills(): void {
    this.SkillsService.getSkills()
      .subscribe(skills => {
        console.log(skills)
        this.skills = skills
        this.dataSourceSkill = new MatTableDataSource<SkillsList>(this.skills);
        this.dataSourceSkill.paginator = this.paginator;
      });
  }
  getGroups(): void {
    this.GroupSkillService.getGroups()
      .subscribe(groups => {
        console.log(groups)
        this.groups = groups
        this.dataSourceGroup = new MatTableDataSource<GroupSkill>(this.groups);
        this.dataSourceGroup.paginator = this.paginator;
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
      this.SkillsService.deleteSkills(idSkill).subscribe(result=> {
        console.log(result);
        this.getSkills();
        this.getGroups();
      })
    }
   
  }

  deleteGroup(id: number) {
    
    if(confirm("Вы хотите удалить группу?")) {
      this.GroupSkillService.deleteGroupSkill(id).subscribe(result=> {
        console.log(result);
        this.getGroups();
        this.getSkills();
      })
    }
   
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceSkill.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit(): void {
    this.getSkills()
    this.getGroups()
    //this.dataSource = new MatTableDataSource<EmployeeList>(this.employees);
    //this.dataSource.paginator = this.paginator;



  }

}
