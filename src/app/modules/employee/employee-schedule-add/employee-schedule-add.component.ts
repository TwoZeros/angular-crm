import {Component, Inject, OnInit} from '@angular/core';
import {GroupSkillsService} from "../../../../shared/services/Groupskill.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {NgForm} from "@angular/forms";
import {ScheduleService} from "../../../../shared/services/schedule.service";
import { EmployeeScheduleService } from '../../../../shared/services/employeeSchedule.service';

@Component({
  selector: 'app-employee-schedule-add',
  templateUrl: './employee-schedule-add.component.html',
  styleUrls: ['./employee-schedule-add.component.css']
})
export class EmployeeScheduleAddComponent implements OnInit {
  beginDate: Date
  endDate: Date
  scheduleId;
  schedules;

  constructor(
    private ScheduleService: ScheduleService,
    private EmployeeScheduleService : EmployeeScheduleService,
    public dialogRef: MatDialogRef<EmployeeScheduleAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onSubmit(form: NgForm) {
    console.log(this.data.employeeId);
    console.log(+this.scheduleId);
    console.log(this.beginDate);
    console.log(this.endDate);
    this.EmployeeScheduleService.addEmployeeSchedule({
      sheduleId: +this.scheduleId,
      employeeId : +this.data.employeeId,
      begin: this.beginDate,
      end: this.endDate,
    }).subscribe(status => {

    })
  }
  ngOnInit(): void {
    this.getSchedules()
  }
  getSchedules() {
    this.ScheduleService.getSchedules().subscribe(schedule => { this.schedules = schedule });
  }

}
