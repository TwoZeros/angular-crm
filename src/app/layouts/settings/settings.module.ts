import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingStartPageComponent } from './pages/setting-start-page/setting-start-page.component';
import { MyMaterialModule } from 'src/shared/config/material.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { SettingLayoutComponent } from './pages/setting-layout/setting-layout.component';
import { SettingRoutingModule } from './setting-routing.module';



@NgModule({
  declarations: [
    SettingStartPageComponent,
    SettingLayoutComponent],
  imports: [
    CommonModule,
    SettingRoutingModule,
    MyMaterialModule,
    RouterModule,
    SharedModule,

  ]
})
export class SettingsModule { }
