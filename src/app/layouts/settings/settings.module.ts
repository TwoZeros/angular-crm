import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingStartPageComponent } from './pages/setting-start-page/setting-start-page.component';
import { MyMaterialModule } from 'src/shared/config/material.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { SettingLayoutComponent } from './pages/setting-layout/setting-layout.component';
import { SettingRoutingModule } from './setting-routing.module';
import { GroupSkillAddComponent } from './pages/skills/group-skill-add/group-skill-add.component';
import { SkillsAddComponent } from './pages/skills/skills-add/skills-add.component';
import { SkillsListComponent } from './pages/skills/skills-list/skills-list/skills.component';
import { SkillsUpdateComponent } from './pages/skills/skills-update/skills-update.component';
import { GroupSkillsUpdateComponent } from './pages/skills/group-skill-update/group-skill-update.component';
import { GroupSkillsService } from 'src/shared/services/Groupskill.service';
import { SkillsService } from 'src/shared/services/skills.service';
import { DepartmentListComponent } from './pages/department/department-list/department-list.component';
import { DepartmentAddComponent } from './pages/department/department-add/department-add.component';
import { DepartmentUpdateComponent } from './pages/department/department-update/department-update.component';
import { UserListComponent } from './pages/users/user-list/user-list.component';
import { UserAddComponent } from './pages/users/user-add/user-add.component';
import { UserUpdateComponent } from './pages/users/user-update/user-update.component';
import { UserService } from 'src/shared/services/user.service';
import { NgxSpinnerModule } from 'ngx-spinner';



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
    UserUpdateComponent
  ],
  imports: [
    CommonModule,
    SettingRoutingModule,
    MyMaterialModule,
    RouterModule,
    SharedModule,
    NgxSpinnerModule
  ],
  providers: [
   GroupSkillsService,
   SkillsService,
   UserService
  ]
})
export class SettingsModule { }
