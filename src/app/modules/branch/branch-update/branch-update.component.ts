import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Router} from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray, FormsModule } from '@angular/forms';
import { Branch } from 'src/shared/models/branch';
import {BranchService} from '../../../../shared/services/branch.service'
import { ItemsBranc } from '../../employee/employee-add/employee-add.component';
import { CompanyService } from 'src/shared/services/company.service';
import { company } from 'src/shared/models/company';

@Component({
  selector: 'app-branch-update',
  templateUrl: './branch-update.component.html',
  styleUrls: ['./branch-update.component.css']
})
export class BranchUpdateComponent implements OnInit {

  updateForm : FormGroup;
  currentIdEmployee : number;
  BranchesList: ItemsBranc[] = []
  branchs: Branch;
  selectedCompany: number;
  idBranchNow: number;
  indexBranchNow: number;
  companies: company;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private BranchService: BranchService,
    private CompanyService: CompanyService,
    private location: Location
  ) { }


  ngOnInit(): void {
    this.currentIdEmployee = +this.route.snapshot.paramMap.get('id');
    this.getAllCompany();
    this.getBranchs();
  }
  getAllCompany()
  {
    this.CompanyService.getCompanies().subscribe(data=>{
        this.companies = data;

    })



  }
  createForm(): void {
    this.updateForm = new FormGroup({

      Name: new FormControl(this.branchs.name, [Validators.required]),
      timezone: new FormControl(this.branchs.islocalbranch, [Validators.required]),
      localBranch: new FormControl(this.branchs.islocalbranch, [Validators.required]),
      selectedCompany: new FormControl(this.branchs.companyName, [Validators.required]),
  });
  }
  submit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.BranchService.updateBranch(this.currentIdEmployee,{
      id:id,
      name: this.updateForm.value.Name,
      timezoneid: this.updateForm.value.timezoneid,
      islocalbranch: this.updateForm.value.islocalbranch,

      сompanyId: this.updateForm.value.selectedBranch,
    }).subscribe(status =>{
      console.log(this.selectedCompany);
      this.router.navigate(
        ['/employee',id]
      );
    } );

  }
  getBranchs(): void {

    this.BranchService.getBranch(this.currentIdEmployee)
      .subscribe(branchs => {
        this.branchs = branchs;
        this.createForm();
      }
        );

  }

}
