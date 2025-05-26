import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { inventarioRoutes } from './main/inventario/routes';
import { produccionRoutes } from './main/produccion/routes';
import { reproduccionRoutes } from './main/reproduccion/routes';
import { saludRoutes } from './main/salud/routes';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadComponent: () => import('./login/login.page').then(m => m.LoginPage) },
  { path: 'register', loadComponent: () => import('./register/register.page').then(m => m.RegisterPage) },

{
  path: 'app',
  component: MainLayoutComponent,
  canActivate: [authGuard],
  children: [
    { path: 'home', loadComponent: () => import('./home/home.page').then(m => m.HomePage) },
        ...inventarioRoutes,
        ...produccionRoutes,
        ...reproduccionRoutes,
        ...saludRoutes,
  ]
}

];
