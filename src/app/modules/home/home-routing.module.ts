import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ImportGraph } from '@angular/compiler-cli/src/ngtsc/cycles';
import { BottomComponent } from './pages/bottom/bottom.component';
import { SideComponent } from './pages/side/side.component';
import { LeftComponent } from './pages/left/left.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'map-search',
    pathMatch: 'prefix'
  },
  {
    path: 'map-search',
    component: HomeComponent,
    children: [
      {
        path: '',
        outlet: 'main-content',
        children: [
          {
            path: '',
            redirectTo: 'map',
            pathMatch: 'prefix'
          },

          {
            path: 'map',
            loadChildren: () => import('../map/map.module').then(m => m.MapModule)
          }
        ]
      }
    ]
  },

  {
    path: 'analysis',
    component: HomeComponent,
    children: [
      {
        path: '',
        outlet: 'main-content',
        children: [
          {
            path: '',
            redirectTo: 'map',
            pathMatch: 'prefix'
          },

          {
            path: 'map',
            loadChildren: () => import('../map/map.module').then(m => m.MapModule)
          }
        ]
      },

      {
        path: '',
        component: LeftComponent,
        outlet: 'left-content'
      },

      {
        path: '',
        component: SideComponent,
        outlet: 'side-content'
      },

      {
        path: '',
        component: BottomComponent,
        outlet: 'bottom-content'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
