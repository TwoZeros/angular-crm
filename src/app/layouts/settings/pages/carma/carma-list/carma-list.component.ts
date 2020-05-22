import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {department} from "../../../../../../shared/models/department";
import {NgxSpinnerService} from "ngx-spinner";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {MatTableDataSource} from "@angular/material/table";
import {DepartmentAddComponent} from "../../department/department-add/department-add.component";
import {DepartmentUpdateComponent} from "../../department/department-update/department-update.component";
import {Carma} from "../../../../../../shared/models/carma";
import {CarmaService} from "../../../../../../shared/services/carma.service";
import {CarmaAddComponent} from "../carma-add/carma-add.component";
import {CarmaUpdateComponent} from "../carma-update/carma-update.component";

@Component({
  selector: 'app-carma-list',
  templateUrl: './carma-list.component.html',
  styleUrls: ['./carma-list.component.css']
})

export class CarmaListComponent implements OnInit {
  dataSourceCarma;
  displayedColumns: string[] = ['id', 'name', 'begin', 'end', 'actions'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild('TableCarmaPaginator', {static: true}) tableCarmaPaginator: MatPaginator;
  @ViewChild('TableCarmaSort', {static: true}) tableCarmaSort: MatSort;



  carmas: Carma[]
  constructor(private CarmaService: CarmaService,
              private spinner: NgxSpinnerService,
              private router: Router,
              public dialog: MatDialog) { }
  getCarmas(): void {
    this.CarmaService.getCarmas()
      .subscribe(carmas => {
        console.log(carmas);
        this.carmas = carmas;
        console.log(this.carmas);
        this.dataSourceCarma = new MatTableDataSource<Carma>(this.carmas);
        this.dataSourceCarma.paginator = this.tableCarmaPaginator;
        this.dataSourceCarma.sort = this.tableCarmaSort;
        this.spinner.hide();
      });
  }

  createCarma(): void {
    const dialogRef = this.dialog.open(CarmaAddComponent, {
      width: '500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getCarmas()
    });
  }
  updateCarma(id :number, name: string, beginCarma: number, endCarma: number): void {
    const dialogRef = this.dialog.open(CarmaUpdateComponent, {
      width: '500px',
      data: {id : id,
             name: name,
              beginCarma: beginCarma,
              endCarma: endCarma}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getCarmas();
    });
  }

  deleteCarma(idDep: number) {

    if(confirm("Вы хотите удалить данное название?")) {
      this.CarmaService.deleteCarma(idDep).subscribe(result=> {
        console.log(result);
        this.getCarmas();
      })
    }

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceCarma.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.spinner.show();
    this.getCarmas();
  }

}
