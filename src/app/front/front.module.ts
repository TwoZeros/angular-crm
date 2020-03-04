import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { FrontRoutingModule } from './front-routing.module';
import {EmployeeAddComponent} from './employee-add/employee-add.component'



import { MatInputModule, } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from "@angular/material/table";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MyMaterialModule } from 'src/shared/config/material.module';
import { HttpClientModule }   from '@angular/common/http';
import {isLoginedGuard} from './isLoginedGuard'
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { EmployeeUploadAvatarComponent } from './employee-upload-avatar/employee-upload-avatar.component';

@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeDetailComponent,
    DashbordComponent,
    UserLoginComponent,
    EmployeeAddComponent,
    EmployeeUpdateComponent,
    EmployeeUploadAvatarComponent
  ],
  imports: [
    CommonModule,
    FrontRoutingModule,
    MyMaterialModule,
    HttpClientModule
  ],
  providers: [isLoginedGuard],
})
export class FrontModule { }
