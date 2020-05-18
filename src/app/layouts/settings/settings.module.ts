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



@NgModule({
  declarations: [
    SettingStartPageComponent,
    SettingLayoutComponent,
   GroupSkillAddComponent,
   GroupSkillsUpdateComponent,
   SkillsAddComponent,
   SkillsListComponent,
  SkillsUpdateComponent
  ],
  imports: [
    CommonModule,
    SettingRoutingModule,
    MyMaterialModule,
    RouterModule,
    SharedModule,

  ],
  providers: [
   GroupSkillsService,
   SkillsService,
  ]
})
export class SettingsModule { }
