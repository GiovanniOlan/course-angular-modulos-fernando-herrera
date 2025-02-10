import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { PageLayoutModule } from '../../layouts/page-layout/page-layout.module';
import { MaterialModule } from '../material/material.module';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    ListPageComponent,
    CardComponent
  ],
  imports: [
    // Third modules
    CommonModule,
    MaterialModule,
    // Layouts
    PageLayoutModule,
    // My internal modules
    HeroesRoutingModule,
  ]
})
export class HeroesModule { }
