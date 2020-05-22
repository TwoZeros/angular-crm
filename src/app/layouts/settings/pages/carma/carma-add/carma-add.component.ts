import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {NgForm} from "@angular/forms";
import {CarmaService} from "../../../../../../shared/services/carma.service";

@Component({
  selector: 'app-carma-add',
  templateUrl: './carma-add.component.html',
  styleUrls: ['./carma-add.component.css']
})
export class CarmaAddComponent implements OnInit {

  nameCarma: string;
  beginCarma:number;
  endCarma:number;

  constructor(
    private CarmaService: CarmaService,
    public dialogRef: MatDialogRef<CarmaAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    console.log("run00");
    this.dialogRef.close();

  }
  onSubmit(form: NgForm) {
    this.CarmaService.addCarma({
      name: this.nameCarma,
      beginCarma: this.beginCarma,
      endCarma: this.endCarma,
    }).subscribe(status => {

    })
  }
  ngOnInit(): void {
  }

}
