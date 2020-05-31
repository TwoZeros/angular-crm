import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {MatTableDataSource} from "@angular/material/table";
import {Schedule} from "../../../../../../shared/models/schedule";
import {ScheduleService} from "../../../../../../shared/services/schedule.service";
import {ScheduleAddComponent} from "../schedule-add/schedule-add.component";
import {ScheduleUpdateComponent} from "../schedule-update/schedule-update.component";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.css']
})
export class ScheduleListComponent implements OnInit {
  dataSourceSchedule;
  displayedColumns: string[] = ['id','name', 'year', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday', 'actions']
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild('TableSkillPaginator', {static: true}) tableSkillPaginator: MatPaginator;
  @ViewChild('TableSkillSort', {static: true}) tableSkillSort: MatSort;



  schedules: Schedule[]
  constructor(private ScheduleService: ScheduleService,
              private spinner: NgxSpinnerService,
              private router: Router,
              public dialog: MatDialog) { }
  getschedules(): void {
    this.ScheduleService.getSchedules()
      .subscribe(schedules => {
        this.schedules = schedules;
        this.dataSourceSchedule = new MatTableDataSource<Schedule>(this.schedules);
        this.dataSourceSchedule.paginator = this.tableSkillPaginator;
        this.dataSourceSchedule.sort = this.tableSkillSort;
        this.spinner.hide();
      });
  }

  createSchedule(): void {
    const dialogRef = this.dialog.open(ScheduleAddComponent, {
      width: '700px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getschedules()
    });
  }
  updateSchedule(id :number): void {
    const dialogRef = this.dialog.open(ScheduleUpdateComponent, {
      width: '600px',
      data: {id : id}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getschedules()
    });
  }

  deleteSchedule(id: number) {

    if(confirm("Вы хотите удалить данное рассписание?")) {
      this.ScheduleService.deleteSchedule(id).subscribe(result=> {
        console.log(result);
        this.getschedules();
      })
    }

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceSchedule.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.spinner.show();
    this.getschedules();
  }

}


