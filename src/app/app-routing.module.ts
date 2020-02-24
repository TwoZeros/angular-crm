import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  {DashbordComponent} from './dashbord/dashbord.component';
import {EmployeeComponent} from './employee/employee.component'
import {EmployeeDetailComponent} from './employee-detail/employee-detail.component';

const routes: Routes = [
  { path: '', component: DashbordComponent },
  { path: 'dashboard', component: DashbordComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'employee/:id', component: EmployeeDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
