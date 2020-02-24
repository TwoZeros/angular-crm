import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { LoginComponentComponent } from './login-component/login-component.component';


import {MyMaterialModule} from './material.module'

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeDetailComponent,
    DashbordComponent,
    MainMenuComponent,
    LoginComponentComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
    MyMaterialModule

  ],
  exports: [
    MyMaterialModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
