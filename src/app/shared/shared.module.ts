/// <reference path="../../../node_modules/anychart/dist/index.d.ts"/>

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {MatDividerModule} from '@angular/material/divider'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import {FlexLayoutModule} from '@angular/flex-layout'
import {MatListModule} from '@angular/material/list'
import { RouterModule } from '@angular/router';
import { AreaComponent } from './widgets/area/area.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { HeaderLoginComponent } from './components/header-login/header-login.component';
import { RaitingClientChartComponent } from './widgets/RatingClientChart/rating-client-chart.component';
import { ChartComponent } from './chart/chart.component';
import { DemoDataProviderService } from './demo-data-provider.service';
import { DashboardResourceService } from '../../shared/services/dashboardResource.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MyMaterialModule } from '../../shared/config/material.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    RaitingClientChartComponent,
    HeaderLoginComponent,
    ChartComponent
  ],
  providers: [DemoDataProviderService, DashboardResourceService],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule,
    NgxSpinnerModule,
    FormsModule,
    MatDatepickerModule,
    MyMaterialModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    RaitingClientChartComponent,
    HeaderLoginComponent,
    ChartComponent
  ]
})
export class SharedModule { }
