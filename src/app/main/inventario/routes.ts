import { Routes } from '@angular/router';

export const inventarioRoutes: Routes = [
  {
    path: 'inventario/forraje',
    loadComponent: () =>
      import('./forraje/forraje.component').then(m => m.ForrajeComponent)
  },
  {
    path: 'inventario/suplementos',
    loadComponent: () =>
      import('./suplementos/suplementos.component').then(m => m.SuplementosComponent)
  }
];
