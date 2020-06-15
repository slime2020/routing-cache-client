import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from 'src/app/components/group12/main/main.component';

const routes: Routes = [
  {
    path: 'aaa',
    component: MainComponent
  },
  {
    path: 'bbbb',
    component: MainComponent
  },
  {
    path: 'ccccc',
    component: MainComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Group12RouterModule { }
