import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {clientList} from "../../../../../shared/models/clientList";
import {NgxSpinnerService} from "ngx-spinner";
import {Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {Client} from "../../../../../shared/models/client";
import {Project} from "../../../../../shared/models/project";
import {ProjectService} from "../../../../../shared/services/project.service";
import {MatDialog} from "@angular/material/dialog";
import {ProjectAddComponent} from "../project-add/project-add.component";
import {ProjectUpdateComponent} from "../project-update/project-update.component";
import {Employee} from "../../../../../shared/models/employee";
import {ProjectDetailComponent} from "../../project-detail/project-detail.component";

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
  dataSource ;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  displayedColumns: string[] = ['id', 'name', 'projectManagerName', 'projectClientName', 'factHour', 'totalHour', 'actions'];
  projects: Project[];
  constructor(private ProjectService: ProjectService,
              private spinner: NgxSpinnerService,
              private router: Router,
              public dialog: MatDialog) { }
  getProjects(): void {
    this.ProjectService.getProjects()
      .subscribe(projects => {

        this.projects = projects;
        this.dataSource = new MatTableDataSource<Project>(this.projects);
        this.dataSource.paginator = this.paginator;

        this.spinner.hide();
      });
  }

  onRowClicked(row: Project) {
    const dialogRef = this.dialog.open(ProjectDetailComponent, {
      width: '500px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getProjects();
    });
  }
  createProject(): void {
    const dialogRef = this.dialog.open(ProjectAddComponent, {
      width: '500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getProjects();
    });
  }
  updateProject(id :number): void {
    const dialogRef = this.dialog.open(ProjectUpdateComponent, {
      width: '500px',
      data: {id : id,
              }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getProjects();
    });
  }

  deleteProject(idDep: number) {

    if(confirm("Вы хотите удалить данное подразделение?")) {
      this.ProjectService.deleteProject(idDep).subscribe(result=> {
        console.log(result);
        this.getProjects();
      })
    }

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit(): void {
    this.spinner.show();
    this.getProjects();




  }

}
