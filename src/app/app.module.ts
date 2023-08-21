import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NAVIGATIONS } from './interfaces';
import { navigations } from './config/menu';
import { CommonModule } from '@angular/common';
import { SettingMenuComponent } from './pages/setting-menu/setting-menu.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SettingMenuComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    {provide: NAVIGATIONS, useValue: navigations},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
