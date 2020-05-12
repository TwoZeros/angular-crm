import { Component, OnInit } from '@angular/core';
import { Branch } from 'src/shared/models/branch';
import { ItemsBranc } from '../../employee/employee-add/employee-add.component';
import { Router } from '@angular/router';
import { BranchService } from 'src/shared/services/branch.service';
import { CompanyService } from 'src/shared/services/company.service';
import { company } from 'src/shared/models/company';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-branch-add',
  templateUrl: './branch-add.component.html',
  styleUrls: ['./branch-add.component.css']
})
export class BranchAddComponent implements OnInit {

  dataSource;
  // @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  branch: Branch;
  Name : string;
  timezone: number;
  localBranch: boolean;
  selectedCompany: number;
  companies: company;
  BranchesList: ItemsBranc[] = []


  constructor(
    private router: Router,
    private BranchService: BranchService,
    private CompanyService: CompanyService,
    private location: Location,
    ) { }

  ngOnInit(): void {
    this.getAllCompany();

  }
  getAllCompany()
  {
    this.CompanyService.getCompanies().subscribe(data=>{
        this.companies = data;

    })



  }
  goBack() {
    this.location.back();

  }

  onSubmit(form: NgForm){
    this.BranchService.addBranch({
          name: this.Name,
          timeZoneId: +this.timezone,
          isLocalBranch: true,
          companyId: +this.selectedCompany,

           }).subscribe(status=> {
            this.router.navigate(
              ['/branch']

            );

          })
}
  add() {

  }

}


