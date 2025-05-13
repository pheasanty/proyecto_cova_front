import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // 👈 agrega esto

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule], // 👈 agrega esto
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  menu = [
  {
    label: 'Gestión de Inventario',
    items: [
      { label: 'Inventario', link: '/inventario' },
      { label: 'Categoría de productos', link: '/categorias' }
    ]
  },
  {
    label: 'Reportes',
    items: [
      { label: 'Restaurante', link: '/reportes/restaurante' },
      { label: 'Proveedores', link: '/reportes/proveedores' },
      { label: 'Inventario actual', link: '/reportes/inventario' },
      { label: 'Información del sistema', link: '/reportes/info' }
    ]
  },
  {
    label: 'Gestión de Proveedores',
    items: [
      { label: 'Proveedores', link: '/proveedores' },
      { label: 'Orden de compra', link: '/ordenes' }
    ]
  },
  {
    label: 'Contacto con proveedores',
    items: [
      { label: 'Buscar contacto con proveedor', link: '/contacto' }
    ]
  }
];}
