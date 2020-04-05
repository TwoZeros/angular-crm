import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { EmployeeService } from '../../../../shared/services/employee.service';
import { Employee } from '../../../../shared/models/employee';

@Component({
  selector: 'app-employee-upload-avatar',
  templateUrl: './employee-upload-avatar.component.html',
  styleUrls: ['./employee-upload-avatar.component.css']
})
export class EmployeeUploadAvatarComponent implements OnInit {
  @ViewChild("fileUpload", { static: false })
  fileUpload: ElementRef;
  files = [];
  currentIdEmployee: number;
  photo;
  employee: Employee;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private EmployeeService: EmployeeService,
    private location: Location,

  ) { }

  ngOnInit(): void {
    this.currentIdEmployee = +this.route.snapshot.paramMap.get('id');
    this.getEmployee();
  }
  getEmployee(): void {
  this.EmployeeService.getEmployee(this.currentIdEmployee)
      .subscribe(employee => {
        this.employee = employee}
        );
      
  }

  codingFile(file) {


    var srcData;


    var reader = new FileReader();

    reader.onloadend = function (fileLoadedEvent) {
      srcData = "" + fileLoadedEvent.target.result;
      var image = document.getElementsByClassName('avatar')[0];
      image.setAttribute('src', srcData);
      image.setAttribute('width', '400');

    }

    reader.readAsDataURL(file);

  }
  upload() {
    var image = document.getElementsByClassName('avatar')[0];
    var dataSrc = image.getAttribute('src');
    this.EmployeeService.uploadAvatarEmployee(this.currentIdEmployee, {
      id: this.currentIdEmployee,
      photo: dataSrc
    }).subscribe(status => {

      this.router.navigate(
        ['/employee', this.currentIdEmployee]
      );
    })
  }
  onClick() {
    const fileUpload = this.fileUpload.nativeElement;
    fileUpload.onchange = () => {
      const file = fileUpload.files[0];
      this.codingFile(file);
    };
    fileUpload.click();
  }

}
