import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Group12RouterModule } from './group12.route.module';

import { MainComponent } from 'src/app/components/group12/main/main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    Group12RouterModule
  ]
})
export class Group12Module { }
