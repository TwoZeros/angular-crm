import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  {DashbordComponent} from './dashbord/dashbord.component';
import {EmployeeComponent} from './employee/employee.component'
import {EmployeeDetailComponent} from './employee-detail/employee-detail.component';
import {EmployeeAddComponent} from './employee-add/employee-add.component'
import {UserLoginComponent} from './user-login/user-login.component'

const routes: Routes = [
  { path: '', component: DashbordComponent },
  { path: 'dashboard', component: DashbordComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'employee/add', component: EmployeeAddComponent},
  { path: 'employee/:id', component: EmployeeDetailComponent },
  { path: 'login', component: UserLoginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRoutingModule { }
