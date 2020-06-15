import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Group1page1Component } from 'src/app/components/group1page1/group1page1.component';

const routes: Routes = [
  {
    path: '',
    component: Group1page1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Group1RouterModule { }
