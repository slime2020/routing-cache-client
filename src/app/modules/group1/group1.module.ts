import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Group1page1Component } from 'src/app/components/group1page1/group1page1.component';
import { Group1RouterModule } from './group1.route.module';

@NgModule({
  declarations: [Group1page1Component],
  imports: [CommonModule, Group1RouterModule],
  entryComponents: []
})
export class Group1Module { }
