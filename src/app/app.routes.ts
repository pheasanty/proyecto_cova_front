import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { gestionInvRoutes } from './gestion-inv/routes';
import { gestionProvRoutes } from './gestion-prov/routes';
import { gestionRepRoutes } from './gestion-rep/routes';
import { MainLayoutComponent } from './main-layout/main-layout.component';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadComponent: () => import('./login/login.page').then(m => m.LoginPage) },
  { path: 'register', loadComponent: () => import('./register/register.page').then(m => m.RegisterPage) },

  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: 'home', loadComponent: () => import('./home/home.page').then(m => m.HomePage) },
      ...gestionInvRoutes,
      ...gestionProvRoutes,
      ...gestionRepRoutes,
    ]
  }
];
