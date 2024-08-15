import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeCComponent } from './type-c.component';

const routes: Routes = [
  {
    path: '',
    component: TypeCComponent
  },
  {
    path: ':id',
    component: TypeCComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeCRoutingModule { }
