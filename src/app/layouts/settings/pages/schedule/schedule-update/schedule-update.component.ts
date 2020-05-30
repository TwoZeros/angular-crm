import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ScheduleService} from "../../../../../../shared/services/schedule.service";
interface DepartmentGroup {
  value: Number;
  viewValue: string;
}
@Component({
  selector: 'app-schedule-update',
  templateUrl: './schedule-update.component.html',
  styleUrls: ['./schedule-update.component.css']
})
export class ScheduleUpdateComponent implements OnInit {

  nameDepartment: string;
  updateForm : FormGroup;
  schdule;

  constructor(
    private ScheduleService: ScheduleService,
    public dialogRef: MatDialogRef<ScheduleUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  submit(): void {

    this.ScheduleService.updateSchedule(this.data.id,{
      id:this.data.id,
      name:this.updateForm.value.name,
      year: this.updateForm.value.year,
      workHoursCount: {
        monday: this.updateForm.value.monday,
        tuesday:this.updateForm.value.tuesday,
        wednesday:this.updateForm.value.wednesday,
        thursday:this.updateForm.value.thursday,
        friday:this.updateForm.value.friday,
        saturday:this.updateForm.value.saturday,
        sunday:this.updateForm.value.sunday
      }


    }).subscribe(status =>{
        this.onNoClick();
      }
    );

  }
  ngOnInit(): void {
    this.getSchedule();
  }


  getSchedule(): void {

    this.ScheduleService.getSchedulebyId(this.data.id)
      .subscribe(schdule => {
          this.schdule = schdule;
          this.createForm();
        }
      );

  }

  createForm(): void {
    this.updateForm = new FormGroup({
      name: new FormControl(this.schdule.name, [Validators.required]),
      year: new FormControl(this.schdule.year, [Validators.required]),
      monday: new FormControl(this.schdule.monday, [Validators.required]),
      tuesday: new FormControl(this.schdule.tuesday, [Validators.required]),
      wednesday: new FormControl(this.schdule.wednesday, [Validators.required]),
      thursday: new FormControl(this.schdule.thursday, [Validators.required]),
      friday: new FormControl(this.schdule.friday, [Validators.required]),
      saturday: new FormControl(this.schdule.saturday, [Validators.required]),
      sunday: new FormControl(this.schdule.sunday, [Validators.required]),
    });
  }

}
