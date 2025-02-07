import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayoutComponent } from './page-layout.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../modules/material/material.module';



@NgModule({
  declarations: [
    PageLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
})
export class PageLayoutModule { }
