import { Routes } from '@angular/router';

export const produccionRoutes: Routes = [
    {
        path: 'produccion/historial',
        loadComponent:() =>
        import('./historial/historial.component').then(m => m.HistorialComponent)
    },
    {
        path: 'produccion/ordenos',
        loadComponent:() =>
        import('./ordenos/ordenos.component').then(m => m.OrdenosComponent)
    }
]
