import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingStartPageComponent } from './pages/setting-start-page/setting-start-page.component';
import { MyMaterialModule } from '../../../../src/shared/config/material.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { SettingLayoutComponent } from './pages/setting-layout/setting-layout.component';
import { SettingRoutingModule } from './setting-routing.module';
import { GroupSkillAddComponent } from './pages/skills/group-skill-add/group-skill-add.component';
import { SkillsAddComponent } from './pages/skills/skills-add/skills-add.component';
import { SkillsListComponent } from './pages/skills/skills-list/skills-list/skills.component';
import { SkillsUpdateComponent } from './pages/skills/skills-update/skills-update.component';
import { GroupSkillsUpdateComponent } from './pages/skills/group-skill-update/group-skill-update.component';
import { GroupSkillsService } from '../../../shared/services/Groupskill.service';
import { SkillsService } from '../../../shared/services/skills.service';
import { DepartmentListComponent } from './pages/department/department-list/department-list.component';
import { DepartmentAddComponent } from './pages/department/department-add/department-add.component';
import { DepartmentUpdateComponent } from './pages/department/department-update/department-update.component';
import { UserListComponent } from './pages/users/user-list/user-list.component';
import { UserAddComponent } from './pages/users/user-add/user-add.component';
import { UserUpdateComponent } from './pages/users/user-update/user-update.component';
import { UserService } from '../../../shared/services/user.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CarmaListComponent } from './pages/carma/carma-list/carma-list.component';
import { CarmaAddComponent } from './pages/carma/carma-add/carma-add.component';
import { CarmaUpdateComponent } from './pages/carma/carma-update/carma-update.component';
import { ScheduleService } from '../../../shared/services/schedule.service';
import { ScheduleAddComponent } from './pages/schedule/schedule-add/schedule-add.component';
import { ScheduleListComponent } from './pages/schedule/schedule-list/schedule-list.component';
import { ScheduleUpdateComponent } from './pages/schedule/schedule-update/schedule-update.component';



@NgModule({
  declarations: [
    SettingStartPageComponent,
    SettingLayoutComponent,
   GroupSkillAddComponent,
   GroupSkillsUpdateComponent,
   SkillsAddComponent,
   SkillsListComponent,
  SkillsUpdateComponent,
    DepartmentListComponent,
    DepartmentAddComponent,
    DepartmentUpdateComponent,
    UserListComponent,
    UserAddComponent,
    UserUpdateComponent,
    CarmaListComponent,
    CarmaAddComponent,
    CarmaUpdateComponent,
    ScheduleAddComponent,
    ScheduleListComponent,
    ScheduleUpdateComponent
  ],
  imports: [
    CommonModule,
    SettingRoutingModule,
    MyMaterialModule,
    RouterModule,
    SharedModule,
    NgxSpinnerModule,
    
  ],
  
  providers: [
   GroupSkillsService,
   SkillsService,
   ScheduleService,
   UserService
  ]
})
export class SettingsModule { }
