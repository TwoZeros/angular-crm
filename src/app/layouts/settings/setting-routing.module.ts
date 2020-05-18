import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingStartPageComponent } from './pages/setting-start-page/setting-start-page.component';
import {DepartmentListComponent} from "./pages/department/department-list/department-list.component";
const routes: Routes = [
  { path: '', component: SettingStartPageComponent },
  {path: 'department', component: DepartmentListComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
