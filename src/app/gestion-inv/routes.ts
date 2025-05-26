// src/app/components/gestion-inv/routes.ts
import { Routes } from '@angular/router';

export const gestionInvRoutes: Routes = [
  {
    path: 'Gestioninv/inventario',
    loadComponent: () =>
      import('./inventario/inventario.component').then(m => m.InventarioComponent)
  },
  {
    path: 'Gestioninv/categorias',
    loadComponent: () =>
      import('./categorias/categorias.component').then(m => m.CategoriasComponent)
  }
];
