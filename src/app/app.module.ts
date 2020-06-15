import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouteReuseStrategy } from '@angular/router';
import { AppRoutingCache } from './app-routing-cache';

import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';

import { MaterialModule } from './modules/material-pack.module';
import { LoginModule } from './modules/login/login.module';
import { Group1Module } from './modules/group1/group1.module';
import { Group12Module } from './modules/group12/group12.module';
import { Group23Module } from './modules/group23/group23.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    LoginModule,
    Group1Module,
    Group12Module,
    Group23Module,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: AppRoutingCache }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
