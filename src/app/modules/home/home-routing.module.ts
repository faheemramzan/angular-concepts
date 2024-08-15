import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ImportGraph } from '@angular/compiler-cli/src/ngtsc/cycles';
import { BottomComponent } from './pages/bottom/bottom.component';
import { SideComponent } from './pages/side/side.component';
import { LeftComponent } from './pages/left/left.component';

const typeRoutes: Routes = [
  {
    path: 'type-a',
    outlet: 'left-content',
    loadChildren: () => import('../type-a/type-a.module').then(m => m.TypeAModule)
  },
  {
    path: 'type-b',
    outlet: 'left-content',
    loadChildren: () => import('../type-b/type-b.module').then(m => m.TypeBModule)
  },
  {
    path: 'type-c',
    outlet: 'left-content',
    loadChildren: () => import('../type-c/type-c.module').then(m => m.TypeCModule)
  }
];

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
          },
          ...typeRoutes
        ]
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
      },

      ...typeRoutes
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
