import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeAComponent } from './type-a.component';
import { TypeAOverviewComponent } from './pages/type-a-overview/type-a-overview.component';
import { TypeADetailComponent } from './pages/type-a-detail/type-a-detail.component';

const childRoutes: Routes = [
  {
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full'
  },
  {
    path: 'overview',
    component: TypeAOverviewComponent
  },
  {
    path: 'detail',
    component: TypeADetailComponent
  }
];

const routes: Routes = [
  {
    path: ':id',
    component: TypeAComponent,
    children: childRoutes
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeARoutingModule { }
