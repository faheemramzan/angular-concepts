import { Routes } from '@angular/router';
import { LoginPageComponent } from './shared/components/login-page/login-page.component';
import { HomePageComponent } from './shared/components/home-page/home-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'prefix'
  },

  {
    path: 'login',
    component: LoginPageComponent
  },

  {
    path: 'home',
    component: HomePageComponent
  },

  {
    path: '',
    loadChildren: () => import('./modules/header/header.module').then(m => m.HeaderModule),
    outlet: 'header-content'
  },

  {
    path: 'main',
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
      }
    ]
  }
];
