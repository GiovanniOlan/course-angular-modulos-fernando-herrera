import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { PageLayoutComponent } from '../../layouts/page-layout/page-layout.component';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

const routes: Routes = [
  {
    path: '',
    component: PageLayoutComponent,
    children: [
      { path: 'all', component: ListPageComponent },
      { path: 'search', component: SearchPageComponent },
      { path: ':id', component: HeroPageComponent },
      { path: '**', redirectTo: 'all', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
