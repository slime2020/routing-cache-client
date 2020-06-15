import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: './modules/login/login.module#LoginModule'
  },
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'g12',
        loadChildren: './modules/group12/group12.module#Group12Module'
      },
      {
        path: 'setting',
        children: [
          {
            path: 'g1',
            loadChildren: './modules/group1/group1.module#Group1Module'
          },
          {
            path: '',
            loadChildren: './modules/group23/group23.module#Group23Module'
          }
        ]
      },
      {
        path: 'g23',
        loadChildren: './modules/group23/group23.module#Group23Module'
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
