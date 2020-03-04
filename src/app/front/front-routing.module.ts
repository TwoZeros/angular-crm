import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  {DashbordComponent} from './dashbord/dashbord.component';
import {EmployeeComponent} from './employee/employee.component'
import {EmployeeDetailComponent} from './employee-detail/employee-detail.component';
import {EmployeeAddComponent} from './employee-add/employee-add.component'
import {UserLoginComponent} from './user-login/user-login.component'
import {isLoginedGuard} from './isLoginedGuard'
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { EmployeeUploadAvatarComponent } from './employee-upload-avatar/employee-upload-avatar.component';
const routes: Routes = [
  { path: '', component: DashbordComponent,canActivate: [isLoginedGuard] },
  { path: 'dashboard', component: DashbordComponent, canActivate: [isLoginedGuard] },
  { path: 'employee', component: EmployeeComponent, canActivate: [isLoginedGuard] },
  { path: 'employee/add', component: EmployeeAddComponent, canActivate: [isLoginedGuard]},
  { path: 'employee/:id', component: EmployeeDetailComponent, canActivate: [isLoginedGuard] },
  { path: 'employee/:id/update', component: EmployeeUpdateComponent, canActivate: [isLoginedGuard] },
  { path: 'employee/:id/upload-avatar', component: EmployeeUploadAvatarComponent, canActivate: [isLoginedGuard] },
  { path: 'login', component: UserLoginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRoutingModule { }
