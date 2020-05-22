import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CarmaService} from "../../../../../../shared/services/carma.service";

@Component({
  selector: 'app-carma-update',
  templateUrl: './carma-update.component.html',
  styleUrls: ['./carma-update.component.css']
})
export class CarmaUpdateComponent implements OnInit {
  name: string;
  beginCarma: number;
  endCarma: number;
  updateForm : FormGroup;
  carma;

  constructor(
    private CarmaService: CarmaService,
    public dialogRef: MatDialogRef<CarmaUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  submit(): void {
    
    this.CarmaService.updateCarma(this.data.id,{
      id: this.data.id,
      name: this.updateForm.value.name,
      beginCarma: this.updateForm.value.beginCarma,
      endCarma: this.updateForm.value.endCarma,


    }).subscribe(status =>{
        this.onNoClick();
      }
    );

  }
  ngOnInit(): void {
    this.getCarmas();
  }


  getCarmas(): void {
    this.createForm();

  }

  createForm(): void {
    this.updateForm = new FormGroup({
      name: new FormControl(this.data.name, [Validators.required]),
      beginCarma: new FormControl(this.data.beginCarma, [Validators.required]),
      endCarma: new FormControl(this.data.endCarma, [Validators.required])
    });
  }

}
