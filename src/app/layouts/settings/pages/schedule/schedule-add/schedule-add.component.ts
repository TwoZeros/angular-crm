import { Component, Inject, OnInit } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { NgForm } from "@angular/forms";
import { ScheduleService } from "../../../../../../shared/services/schedule.service";

@Component({
  selector: 'app-schedule-add',
  templateUrl: './schedule-add.component.html',
  styleUrls: ['./schedule-add.component.css']
})
export class ScheduleAddComponent implements OnInit {
  nameSchedule: string;
  year;
  monday;
  tuesday;
  wednesday;
  thursday;
  friday;
  saturday;
  sunday;
  hollidayName;
  hollidayDate;
  hollidays: Array<{ name: string; date: Date }>;
  constructor(
    private ScheduleService: ScheduleService,
    public dialogRef: MatDialogRef<ScheduleAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();

  }
  addHolliday() {
    if (!this.hollidayName || !this.hollidayDate)
      return 0;
    this.hollidays.push({ "name": this.hollidayName, "date": this.hollidayDate });
    console.log(this.hollidays);
    this.clearFormAddHoliday();
  }
  deleteHolliday(id: number) {
    this.hollidays = this.removeElementByIndex(this.hollidays, id);
  }
  removeElementByIndex(array, index) {
    delete array[index];
    array = array.filter(function (element) {
      return element != undefined
    });
    return array;
  }
  clearFormAddHoliday() {
    this.hollidayName = ''
    this.hollidayDate = null;
  }
  onSubmit(form: NgForm) {
    let elem = {
      name: this.nameSchedule,
      year: this.year,
      workHoursCount: {
        monday: this.monday,
        tuesday: this.tuesday,
        wednesday: this.wednesday,
        thursday: this.thursday,
        friday: this.friday,
        saturday: this.saturday,
        sunday: this.sunday
      },
      hollidays: this.hollidays

    }
    console.log(elem);
    this.ScheduleService.addSchedule({
      name: this.nameSchedule,
      year: this.year,
      workHoursCount: {
        monday: this.monday,
        tuesday: this.tuesday,
        wednesday: this.wednesday,
        thursday: this.thursday,
        friday: this.friday,
        saturday: this.saturday,
        sunday: this.sunday
      },
      hollidays: this.hollidays

    }).subscribe(status => {

    })
  }
  ngOnInit(): void {
    this.hollidays = new Array();
  }


}
