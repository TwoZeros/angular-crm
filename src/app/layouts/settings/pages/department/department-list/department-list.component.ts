import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {MatTableDataSource} from "@angular/material/table";
import {department} from "../../../../../../shared/models/department";
import {DepartmentService} from "../../../../../../shared/services/department.service";
import {DepartmentAddComponent} from "../department-add/department-add.component";
import {DepartmentUpdateComponent} from "../department-update/department-update.component";

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  dataSourceDepartment;
  displayedColumns: string[] = ['id', 'name', 'actions']
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild('TableSkillPaginator', {static: true}) tableSkillPaginator: MatPaginator;
  @ViewChild('TableSkillSort', {static: true}) tableSkillSort: MatSort;



  departments: department[]
  constructor(private DepartmentService: DepartmentService,
              private router: Router,
              public dialog: MatDialog) { }
  getDepartments(): void {
    this.DepartmentService.getDepartments()
      .subscribe(departments => {
        console.log(departments)
        this.departments = departments
        this.dataSourceDepartment = new MatTableDataSource<department>(this.departments);
        this.dataSourceDepartment.paginator = this.tableSkillPaginator;
        this.dataSourceDepartment.sort = this.tableSkillSort;
      });
  }

  createDepartment(): void {
    const dialogRef = this.dialog.open(DepartmentAddComponent, {
      width: '500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getDepartments()
    });
  }
  updateDepartment(id :number): void {
    const dialogRef = this.dialog.open(DepartmentUpdateComponent, {
      width: '500px',
      data: {id : id}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getDepartments()
    });
  }

  deleteDepartment(idDep: number) {

    if(confirm("Вы хотите удалить данное подразделение?")) {
      this.DepartmentService.deleteDepartment(idDep).subscribe(result=> {
        console.log(result);
        this.getDepartments();
      })
    }

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceDepartment.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.getDepartments()
  }

}


