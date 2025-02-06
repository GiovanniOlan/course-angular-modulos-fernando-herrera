import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { PageLayoutComponent } from '../../layouts/page-layout/page-layout.component';

const routes: Routes = [
  {
    path: '',
    component: PageLayoutComponent,
    children: [
      { path: 'all', component: ListPageComponent },
      { path: '**', redirectTo: 'all', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
