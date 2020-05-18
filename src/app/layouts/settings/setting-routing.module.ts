import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingStartPageComponent } from './pages/setting-start-page/setting-start-page.component';
import { SkillsListComponent } from './pages/skills/skills-list/skills-list/skills.component';
const routes: Routes = [
  { path: '', component: SettingStartPageComponent },
  { path: 'skills', component: SkillsListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
