import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './page/login-page/login-page.component';
import { AuthLayoutModule } from '../../layouts/auth-layout/auth-layout.module';


@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    // Third modules
    CommonModule,
    // Layouts
    AuthLayoutModule,
    // My internal modules
    AuthRoutingModule,
  ]
})
export class AuthModule { }
