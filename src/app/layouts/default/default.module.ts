import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { NgxSpinnerModule } from "ngx-spinner";
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
import { EmployeeSkillsService } from 'src/shared/services/employeeSkills.service';
import { EmployeeSkillAddComponent } from 'src/app/modules/employee/employee-skill-add/employee-skill-add.component';
import { CommentService } from 'src/shared/services/comment.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ParamInterceptor } from 'src/app/api.interceptor';
import { AuthorisationService } from 'src/shared/services/authorisation.service';
import { ProjectWorkService } from '../../../shared/services/projectwork.service';
import { ProjectService } from '../../../shared/services/project.service';
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
    EmployeeSkillAddComponent,
    ClientsListComponent,
    ClientDetailComponent,
    ClientUpdateComponent,
    ClientUpdateAvatarComponent,
    ClientAddComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MyMaterialModule,
    NgxSpinnerModule,
  ],
  providers: [
    AuthorisationService,
    DashboardService,
    ClientService,
    EmployeeService,
    EmployeeSkillsService,
    CommentService,
    ProjectWorkService,
    ProjectService,
      {
      provide: HTTP_INTERCEPTORS,
      useClass: ParamInterceptor,
      multi: true
    },
  ]   
  
})
export class DefaultModule { }
