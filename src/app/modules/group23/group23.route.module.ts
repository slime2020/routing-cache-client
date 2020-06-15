import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Group23page1Component } from 'src/app/components/group23page1/group23page1.component';
import { Group23page2Component } from 'src/app/components/group23page2/group23page2.component';
import { Group23page3Component } from 'src/app/components/group23page3/group23page3.component';

const routes: Routes = [
  {
    path: 'p1',
    component: Group23page1Component
  },
  {
    path: 'p2',
    component: Group23page2Component
  },
  {
    path: 'p3',
    component: Group23page3Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Group23RouterModule { }
