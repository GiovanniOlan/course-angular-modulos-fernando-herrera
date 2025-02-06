import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayoutComponent } from './page-layout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PageLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
})
export class PageLayoutModule { }
