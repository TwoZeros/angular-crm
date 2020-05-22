import { Component, OnInit, ViewChild } from '@angular/core';
import { SkillsService } from '../../../../../../../shared/services/skills.service'
import { SkillsList } from '../../../../../../../shared/models/skillsList';
import { SkillsAddComponent } from '../../skills-add/skills-add.component';
import { SkillsUpdateComponent } from '../../skills-update/skills-update.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { GroupSkillsService } from 'src/shared/services/Groupskill.service';
import { GroupSkill } from 'src/shared/models/GroupSkill';
import { GroupSkillAddComponent } from '../../group-skill-add/group-skill-add.component';
import { GroupSkillsUpdateComponent } from '../../group-skill-update/group-skill-update.component';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsListComponent implements OnInit {

  dataSourceSkill;
  displayedColumns: string[] = ['id', 'name', 'groupName', 'actions']
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild('TableSkillPaginator', {static: true}) tableSkillPaginator: MatPaginator;
  @ViewChild('TableSkillSort', {static: true}) tableSkillSort: MatSort;

  dataSourceGroup;
  displayedGroupColumns: string[] = ['id','name', 'action'];
  @ViewChild('TableGroupPaginator', {static: true}) tableGroupPaginator: MatPaginator;
  @ViewChild('TableGroupSort', {static: true}) tableGroupSort: MatSort;


  skills: SkillsList[]
  groups: GroupSkill[]
  constructor(private SkillsService: SkillsService,
              private GroupSkillService: GroupSkillsService,
              private spinner: NgxSpinnerService,
              private router: Router,
              public dialog: MatDialog) { }
  getSkills(): void {
    this.SkillsService.getSkills()
      .subscribe(skills => {
        console.log(skills)
        this.skills = skills
        this.dataSourceSkill = new MatTableDataSource<SkillsList>(this.skills);
        this.dataSourceSkill.paginator = this.tableSkillPaginator;
        this.dataSourceSkill.sort = this.tableSkillSort;
      });
  }
  getGroups(): void {
    this.GroupSkillService.getGroups()
      .subscribe(groups => {
        console.log(groups)
        this.groups = groups
        this.dataSourceGroup = new MatTableDataSource<GroupSkill>(this.groups);
        this.dataSourceGroup.paginator = this.tableGroupPaginator;
        this.dataSourceGroup.sort = this.tableGroupSort;
        this.spinner.hide();
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
  createGroupSkill(): void {
    const dialogRef = this.dialog.open(GroupSkillAddComponent, {
      width: '500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getSkills();
      this.getGroups();
    });
  }
  updateSkill(id :number): void {
    const dialogRef = this.dialog.open(SkillsUpdateComponent, {
      width: '500px',
      data: {id : id}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getSkills();
      this.getGroups();
    });
  }

  updateGroup(id :number): void {
    const dialogRef = this.dialog.open(GroupSkillsUpdateComponent, {
      width: '500px',
      data: {id : id}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getSkills()
      this.getGroups()
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
  applyFilterGroup(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceGroup.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit(): void {
    this.spinner.show();
    this.getSkills();
    this.getGroups();
  }

}
