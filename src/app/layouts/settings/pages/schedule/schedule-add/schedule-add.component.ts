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
  holidayName;
  holidayDate;
  holidays: Array<{ name: string; date: Date }>;
  constructor(
    private ScheduleService: ScheduleService,
    public dialogRef: MatDialogRef<ScheduleAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();

  }
  addHoliday() {
    if (!this.holidayName || !this.holidayDate)
      return 0;
    this.holidays.push({ "name": this.holidayName, "date": this.holidayDate });
    console.log(this.holidays);
    this.clearFormAddHoliday();
  }
  deleteHoliday(id: number) {
    this.holidays = this.removeElementByIndex(this.holidays, id);
  }
  removeElementByIndex(array, index) {
    delete array[index];
    array = array.filter(function (element) {
      return element != undefined
    });
    return array;
  }
  clearFormAddHoliday() {
    this.holidayName = ''
    this.holidayDate = null;
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
      hollidays: this.holidays

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
      holidays: this.holidays

    }).subscribe(status => {

    })
  }
  ngOnInit(): void {
    this.holidays = new Array();
  }


}
