import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Group23RouterModule } from './group23.route.module';

import { Group23page1Component } from 'src/app/components/group23page1/group23page1.component';
import { Group23page2Component } from 'src/app/components/group23page2/group23page2.component';
import { Group23page3Component } from 'src/app/components/group23page3/group23page3.component';

@NgModule({
  declarations: [
    Group23page1Component,
    Group23page2Component,
    Group23page3Component
  ],
  imports: [
    CommonModule,
    Group23RouterModule
  ]
})
export class Group23Module { }
