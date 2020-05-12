import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import {Employee} from '../../../../shared/models/employee'
import { NgForm} from '@angular/forms';
import {EmployeeService} from '../../../../shared/services/employee.service'
import {BranchService} from '../../../../shared/services/branch.service'
import {Router} from '@angular/router';
import { Branch } from 'src/shared/models/branch';
import { MatTableDataSource } from '@angular/material/table';
import { branchsList } from 'src/shared/models/branchsList';
import { MatPaginator } from '@angular/material/paginator';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Time } from 'highcharts';

interface Items {
  value: string;
  viewValue: string;
}
export class ItemsBranc{
  id: number;
  name: string;
  constructor(id: number, name: string)
  {
    this.id = id;
    this.name = name;
  }
}
@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  dataSource;
  // @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  items: Items[] = [
    {value: '1', viewValue: 'Admin'},
  ];
  employee: Employee;
  firstName : string;
  secondName: String;
  middleName: String;
  phoneNumber: String;
  email: String;
  photo: string;
  birthDay: Date;
  selectedUser: number;
  selectedBranch: number;
  branchs: Branch[] = []
  BranchesList: ItemsBranc[] = []


  constructor(
    private router: Router,
    private BranchService: BranchService,
    private EmployeeService: EmployeeService,
    private location: Location,
    ) { }

  ngOnInit(): void {
    this.getAllDepartment();

  }
  getAllDepartment()
  {
    this.BranchService.getBranchs().subscribe(data=>{
        this.branchs = data;
        console.log(this.branchs);
        for(let item of this.branchs)
        {
          // this.ItemBranchList.id = (item.id);
          // this.ItemBranchList.companyName = item.companyName;
          this.BranchesList.push(new ItemsBranc(item.id, item.name));



        }
        console.log(this.BranchesList)
    })



  }
  goBack() {
    this.location.back();

  }
  onSubmit(form: NgForm){
    this.EmployeeService.addEmployee({
          firstName: this.firstName,
          middleName: this.middleName,
          secondName: this.secondName,
          phoneNumber: this.phoneNumber,
          email: this.email,

          birthDay: this.birthDay,
          userId: +this.selectedUser,

          branchCompanyId: +this.selectedBranch,
           }).subscribe(status=> {
            this.router.navigate(
              ['/employee']

            );

          })
          console.log(typeof(this.selectedBranch));
}
  add() {

  }

}
