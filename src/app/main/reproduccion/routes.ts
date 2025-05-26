import { Routes } from '@angular/router';

export const reproduccionRoutes: Routes = [
    {
        path: 'reproduccion/inseminaciones',
        loadComponent:() =>
            import('./inseminaciones/inseminaciones.component').then(m => m.InseminacionesComponent)
        },
    {
        path: 'reproduccion/partos',
        loadComponent:() =>
             import('./partos/partos.component').then(m => m.PartosComponent)
        },
]
