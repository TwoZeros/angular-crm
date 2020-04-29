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
import { ClientsListComponent } from '../../modules/clients/clients-list/clients-list.component'
import { ClientDetailComponent } from '../../modules/clients/client-detail/client-detail.component';
import { ClientUpdateComponent } from '../../modules/clients/client-update/client-update.component';
import { ClientUpdateAvatarComponent } from '../../modules/clients/client-update-avatar/client-update-avatar.component';
import { ClientAddComponent } from '../../modules/clients/client-add/client-add.component';
import { ClientService } from 'src/shared/services/client.services';
import { EmployeeService } from 'src/shared/services/employee.service';
import { SkillsListComponent } from 'src/app/modules/skills/skills-list/skills-list/skills.component';
import { SkillsService } from 'src/shared/services/skills.service';
import {GroupSkillsService} from 'src/shared/services/Groupskill.service';
@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    EmployeeAddComponent,
    EmployeeUpdateComponent,
    EmployeeUploadAvatarComponent,
    ClientsListComponent,
    ClientDetailComponent,
    ClientUpdateComponent,
    ClientUpdateAvatarComponent,
    ClientAddComponent,
    SkillsListComponent,
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
    DashboardService,
    ClientService,
    EmployeeService,
    SkillsService,
    GroupSkillsService
  ]
})
export class DefaultModule { }
