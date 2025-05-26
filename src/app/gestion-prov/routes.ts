// src/app/components/gestion-inv/routes.ts
import { Routes } from '@angular/router';

export const gestionProvRoutes: Routes = [
  {
    path: 'GestionProv/proveedores',
    loadComponent: () =>
      import('./proveedores/proveedores.component').then(m => m.ProveedoresComponent)
  },
  {
    path: 'GestionProv/orden-compra',
    loadComponent: () =>
      import('./orden-compra/orden-compra.component').then(m => m.OrdenCompraComponent)
  }
];
