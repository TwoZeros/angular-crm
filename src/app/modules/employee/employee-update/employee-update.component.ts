import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Router} from '@angular/router';
import { EmployeeService }  from '../../../../shared/services/employee.service';
import { Employee } from '../../../../shared/models/employee';
import { FormGroup, FormControl, Validators, FormArray, FormsModule } from '@angular/forms';
import { Branch } from 'src/shared/models/branch';
import {BranchService} from '../../../../shared/services/branch.service'
import { ItemsBranc } from '../employee-add/employee-add.component';
@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})

export class EmployeeUpdateComponent implements OnInit {
  employee : Employee;
  updateForm : FormGroup;
  currentIdEmployee : number;
  BranchesList: ItemsBranc[] = []
  branchs: Branch[] = []
  selectedBranch: number;
  idBranchNow: number;
  indexBranchNow: number;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private BranchService: BranchService,
    private EmployeeService: EmployeeService,
    private location: Location
  ) { }


  ngOnInit(): void {
    this.currentIdEmployee = +this.route.snapshot.paramMap.get('id');
    this.getAllDepartment();
    this.getEmployee();
  }
  getAllDepartment() : void
  {
    this.BranchService.getBranchs().subscribe(data=>{
        this.branchs = data;
        console.log(this.branchs);
        for(let item of this.branchs)
        {

          this.BranchesList.push(new ItemsBranc(item.id, item.name));



        }
        console.log(this.BranchesList)
    })
  }
  findIdBranch() : void
  {

    this.indexBranchNow = 0;
    for(let item of this.BranchesList)
    {
      console.log(this.employee.branch);
        if(item.name == this.employee.branch)
        {
          this.idBranchNow = item.id;
          console.log(this.idBranchNow);
          break;
        }
        this.indexBranchNow += 1;
    }
  }
  createForm(): void {
    this.updateForm = new FormGroup({

      firstName: new FormControl(this.employee.firstName, [Validators.required]),
      secondName: new FormControl(this.employee.secondName, [Validators.required]),
      middleName: new FormControl(this.employee.middleName, [Validators.required]),
      email: new FormControl(this.employee.email, [Validators.required]),
      phoneNumber: new FormControl(this.employee.phoneNumber, [Validators.required]),
      birthDay: new FormControl(new Date(this.employee.birthDay)),
      selectedBranch: new FormControl(this.BranchesList[this.indexBranchNow],[Validators.required]),
  });
  }
  submit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.EmployeeService.updateEmployee(this.currentIdEmployee,{
      id:id,
      firstName:this.updateForm.value.firstName,
      secondName:this.updateForm.value.secondName,
      middleName:this.updateForm.value.middleName,
      birthDay:this.updateForm.value.birthDay,
      email:this.updateForm.value.email,
      phoneNumber:this.updateForm.value.phoneNumber,
      branchCompanyId: this.selectedBranch,
    }).subscribe(status =>{
      console.log(this.selectedBranch);
      this.router.navigate(
        ['/employee',id]
      );
    } );

  }
  getEmployee(): void {

    this.EmployeeService.getEmployee(this.currentIdEmployee)
      .subscribe(employee => {
        this.employee = employee;
        this.findIdBranch();
        console.log((this.BranchesList[this.indexBranchNow])) ;
        this.createForm();
      }
        );

  }

}
