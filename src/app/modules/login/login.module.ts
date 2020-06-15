import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRouterModule } from './login.route.module';

import { MainComponent } from 'src/app/components/login/main/main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, LoginRouterModule]
})
export class LoginModule {}
