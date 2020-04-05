import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartPageComponent } from './startPage.component';

import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import {DashboardService} from '../../../shared/services/dashboard.services'
import { MatCardModule } from '@angular/material/card';
import {MyMaterialModule } from '../../../shared/config/material.module';
import {UserLoginComponent} from '../../modules/user/user-login/user-login.component'

@NgModule({
  declarations: [
    StartPageComponent,
    UserLoginComponent

    
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MyMaterialModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
  ],
  providers: [
    DashboardService
  ]
})
export class StartPageModule { }
