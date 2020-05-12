
import { Component, OnInit,Inject } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Router} from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Branch } from 'src/shared/models/branch';
import { BranchService } from 'src/shared/services/branch.service';

@Component({
  selector: 'app-branch-detail',
  templateUrl: './branch-detail.component.html',
  styleUrls: ['./branch-detail.component.css']
})
export class BranchDetailComponent implements OnInit {
  branch : Branch
  photo: string;
  constructor(
    private router: Router,
  private route: ActivatedRoute,
  private BranchService: BranchService,
  private location: Location,
  public dialog: MatDialog
  ) { }


  ngOnInit(): void {
    this.getBranch();
  }


  getBranch(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.BranchService.getBranch(id)
      .subscribe(branch => {
        this.branch = branch
        console.log(this.branch);

      }

        );

  }
  delete(id: number): void{
    var conf =  confirm("You want delete this branch?")
    if(conf) {
      this.BranchService.deleteBranch(id).subscribe(status=> {

        this.router.navigate(
          ['/branch/']
        );
      })
    }
  }
}
