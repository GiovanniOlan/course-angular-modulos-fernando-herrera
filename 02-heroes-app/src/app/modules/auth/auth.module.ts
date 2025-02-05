import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginLayoutComponent } from '../../common/layout/login-layout/login-layout.component';
import { RegisterLayoutComponent } from '../../common/layout/register-layout/register-layout.component';
import { PageLayoutComponent } from '../../common/layout/page-layout/page-layout.component';


@NgModule({
  declarations: [
    LoginLayoutComponent,
    RegisterLayoutComponent,
    PageLayoutComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
