import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeBComponent } from './type-b.component';

const routes: Routes = [
  {
    path: '',
    component: TypeBComponent
  },
  {
    path: ':id',
    component: TypeBComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeBRoutingModule { }
