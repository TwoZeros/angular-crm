import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectLayoutComponent} from "./pages/project-layout/project-layout.component";
import {ProjectsListComponent} from "./pages/projects-list/projects-list.component";

const routes: Routes = [
  { path: '', component: ProjectsListComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
