import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyMaterialModule } from 'src/shared/config/material.module';
import { HttpClientModule, HTTP_INTERCEPTORS  }   from '@angular/common/http';
/// <reference path="../../node_modules/anychart/dist/index.d.ts"/>

import { ParamInterceptor } from './api.interceptor';
import { DefaultModule } from './layouts/default/default.module';
import { StartPageModule } from './layouts/startPage/startPage.module';
import {isLoginedGuard} from './isLoginedGuard';
import { SettingsModule } from './layouts/settings/settings.module';
import { EmployeeScheduleAddComponent } from './modules/employee/employee-schedule-add/employee-schedule-add.component';




@NgModule({
  declarations: [
    AppComponent,
    EmployeeScheduleAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    HttpClientModule,
    DefaultModule,
    StartPageModule,
    SettingsModule
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
