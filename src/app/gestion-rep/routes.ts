// src/app/components/gestion-inv/routes.ts
import { Routes } from '@angular/router';

export const gestionRepRoutes: Routes = [
  {
    path: 'reportes/info',
    loadComponent: () =>
      import('./info/info.component').then(m => m.InfoComponent)
  },
  {
    path: 'reportes/inventario',
    loadComponent: () =>
      import('./inventario/inventario.component').then(m => m.InventarioComponent)
  },
  {
    path: 'reportes/proveedores',
    loadComponent: () =>
      import('./proveedores/proveedores.component').then(m => m.ProveedoresComponent)
  },
  {
    path: 'reportes/restaurante',
    loadComponent: () =>
      import('./restaurante/restaurante.component').then(m => m.RestauranteComponent)
  },
];
