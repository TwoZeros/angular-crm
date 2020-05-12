import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyMaterialModule } from 'src/shared/config/material.module';
import { HttpClientModule, HTTP_INTERCEPTORS  }   from '@angular/common/http';
import { ParamInterceptor } from './api.interceptor';
import { DefaultModule } from './layouts/default/default.module';
import { StartPageModule } from './layouts/startPage/startPage.module';
import {isLoginedGuard} from './isLoginedGuard';
import { SkillsAddComponent } from './modules/skills/skills-add/skills-add.component';
import { BranchListComponent } from './modules/branch/branch-list/branch-list.component';
import { BranchAddComponent } from './modules/branch/branch-add/branch-add.component';
import { BranchDetailComponent } from './modules/branch/branch-detail/branch-detail.component';
import { BranchUpdateComponent } from './modules/branch/branch-update/branch-update.component';



@NgModule({
  declarations: [
    AppComponent,
    SkillsAddComponent,
    BranchListComponent,
    BranchAddComponent,
    BranchDetailComponent,
    BranchUpdateComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    HttpClientModule,
    DefaultModule,
    StartPageModule

  ],
  exports: [
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: ParamInterceptor,
    multi: true
  },
  isLoginedGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
