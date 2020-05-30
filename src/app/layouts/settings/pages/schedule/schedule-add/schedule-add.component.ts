import {Component, Inject, OnInit} from '@angular/core';

import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {NgForm} from "@angular/forms";
import {ScheduleService} from "../../../../../../shared/services/schedule.service";

@Component({
  selector: 'app-schedule-add',
  templateUrl: './schedule-add.component.html',
  styleUrls:  ['./schedule-add.component.css']
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
  constructor(
    private ScheduleService: ScheduleService,
    public dialogRef: MatDialogRef<ScheduleAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  
  }
  onSubmit(form: NgForm) {
    
    this.ScheduleService.addSchedule({
      name: this.nameSchedule,
      year: this.year,
      workHoursCount: {
        monday: this.monday,
        tuesday:this.tuesday,
        wednesday:this.wednesday,
        thursday:this.thursday,
        friday:this.friday,
        saturday:this.saturday,
        sunday:this.sunday
      }
      
    }).subscribe(status => {

    })
  }
  ngOnInit(): void {
  }


}
