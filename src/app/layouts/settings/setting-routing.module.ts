import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingStartPageComponent } from './pages/setting-start-page/setting-start-page.component';
const routes: Routes = [
  { path: '', component: SettingStartPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
