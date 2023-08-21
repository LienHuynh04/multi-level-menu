import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingMenuComponent } from './pages/setting-menu/setting-menu.component';

const routes: Routes = [
  {
    path: '',
    component: SettingMenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
