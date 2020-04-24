import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { EmployeeDetailComponent } from './modules/employee/employee-detail/employee-detail.component';
import { EmployeeListComponent } from './modules/employee/employee-list/employee.component';
import { EmployeeAddComponent } from './modules/employee/employee-add/employee-add.component';
import { EmployeeUpdateComponent } from './modules/employee/employee-update/employee-update.component';
import { EmployeeUploadAvatarComponent } from './modules/employee/employee-upload-avatar/employee-upload-avatar.component';
import { ClientsListComponent } from './modules/clients/clients-list/clients-list.component'
import { ClientDetailComponent } from './modules/clients/client-detail/client-detail.component';
import { ClientUpdateComponent } from './modules/clients/client-update/client-update.component';
import { ClientUpdateAvatarComponent } from './modules/clients/client-update-avatar/client-update-avatar.component';
import { ClientAddComponent } from './modules/clients/client-add/client-add.component';
import { StartPageComponent } from './layouts/startPage/startPage.component';
import {UserLoginComponent} from './modules/user/user-login/user-login.component';
import {isLoginedGuard} from './isLoginedGuard';
import { SkillsListComponent } from './modules/skills/skills-list/skills.component';
const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [{
      path: '',
      component: DashboardComponent
    },
    { path: 'employee', component: EmployeeListComponent, canActivate: [isLoginedGuard] },
    { path: 'employee/add', component: EmployeeAddComponent, canActivate: [isLoginedGuard] },
    { path: 'employee/:id', component: EmployeeDetailComponent, canActivate: [isLoginedGuard] },
    { path: 'employee/:id/update', component: EmployeeUpdateComponent, canActivate: [isLoginedGuard] },
    { path: 'employee/:id/upload-avatar', component: EmployeeUploadAvatarComponent, canActivate: [isLoginedGuard] },
    { path: 'clients', component: ClientsListComponent, canActivate: [isLoginedGuard] },
    { path: 'client/add', component: ClientAddComponent, canActivate: [isLoginedGuard] },
    { path: 'client/:id', component: ClientDetailComponent, canActivate: [isLoginedGuard] },
    { path: 'client/:id/update', component: ClientUpdateComponent, canActivate: [isLoginedGuard] },
    { path: 'client/:id/upload-avatar', component: ClientUpdateAvatarComponent, canActivate: [isLoginedGuard] },
    { path: 'skills', component: SkillsListComponent, canActivate: [isLoginedGuard] },
    ]
  },
  {
    path: 'login',
    component: StartPageComponent,
    children: [{
      path: '',
      component: UserLoginComponent
    },]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
