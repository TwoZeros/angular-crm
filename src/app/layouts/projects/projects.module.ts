import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MyMaterialModule} from "../../../shared/config/material.module";
import {RouterModule} from "@angular/router";
import {SharedModule} from '../../shared/shared.module';
import {NgxSpinnerModule} from 'ngx-spinner';
import {ProjectsRoutingModule} from "./projects-routing.module";
import {ProjectsListComponent} from "./pages/projects-list/projects-list.component";
import {ProjectLayoutComponent} from "./pages/project-layout/project-layout.component";
import {ProjectService} from "../../../shared/services/project.service";
import { ProjectAddComponent } from './pages/project-add/project-add.component';
import { ProjectUpdateComponent } from './pages/project-update/project-update.component';


@NgModule({
  declarations: [
    ProjectsListComponent,
    ProjectLayoutComponent,
    ProjectAddComponent,
    ProjectUpdateComponent,
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    MyMaterialModule,
    RouterModule,
    SharedModule,
    NgxSpinnerModule,
  ],

  providers: [
    ProjectService,
  ]
})
export class ProjectsModule { }
