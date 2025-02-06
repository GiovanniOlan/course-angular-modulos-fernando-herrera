import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { PageLayoutModule } from '../../layouts/page-layout/page-layout.module';


@NgModule({
  declarations: [
    ListPageComponent,
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    PageLayoutModule
  ]
})
export class HeroesModule { }
