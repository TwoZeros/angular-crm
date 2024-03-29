import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DepartmentListComponent} from "./pages/department/department-list/department-list.component";

import { SettingStartPageComponent } from './pages/setting-start-page/setting-start-page.component';
import { SkillsListComponent } from './pages/skills/skills-list/skills-list/skills.component';
import { UserListComponent } from './pages/users/user-list/user-list.component';
import {CarmaListComponent} from "./pages/carma/carma-list/carma-list.component";
import { ScheduleListComponent } from './pages/schedule/schedule-list/schedule-list.component';

const routes: Routes = [
  { path: '', component: SettingStartPageComponent },
  { path: 'skills', component: SkillsListComponent },
  {path: 'department', component: DepartmentListComponent},
  {path: 'users', component: UserListComponent},
  {path: 'carma', component: CarmaListComponent},
  {path: 'schedule', component: ScheduleListComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
