import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainMenuComponent } from './front/main-menu/main-menu.component';
import { MyMaterialModule } from 'src/shared/config/material.module';
import { HttpClientModule, HTTP_INTERCEPTORS  }   from '@angular/common/http';
import { ParamInterceptor } from './api.interceptor';

@NgModule({
  declarations: [
    AppComponent,
   MainMenuComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    HttpClientModule
  ],
  exports: [
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: ParamInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
