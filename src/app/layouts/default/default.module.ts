import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';

import { RouterModule } from '@angular/router';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import {DashboardService} from '../../../shared/services/dashboard.services';
import {MyMaterialModule } from '../../../shared/config/material.module';

import { EmployeeListComponent }   from '../../modules/employee/employee-list/employee.component';
import { EmployeeDetailComponent } from '../../modules/employee/employee-detail/employee-detail.component';
import {EmployeeAddComponent}      from '../../modules/employee/employee-add/employee-add.component'
import {EmployeeUpdateComponent } from '../../modules/employee/employee-update/employee-update.component'
import {EmployeeUploadAvatarComponent} from '../../modules/employee/employee-upload-avatar/employee-upload-avatar.component'

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    EmployeeAddComponent,
    EmployeeUpdateComponent,
    EmployeeUploadAvatarComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MyMaterialModule
  ],
  providers: [
    DashboardService
  ]
})
export class DefaultModule { }
