import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-proveedores',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.scss']
})
export class ProveedoresComponent {
  searchTerm: string = '';

  proveedores = [
    {
      nombre: 'Purolomo',
      telefono: '123-456-7890',
      direccion: 'Av. Principal #123',
      logo: 'assets/purolomo-logo.png' // Reemplaza con tu imagen real
    },
    {
      nombre: 'Coca-Cola',
      telefono: '987-654-3210',
      direccion: 'Zona Industrial, Galpón 5',
      logo: 'assets/coca-logo.png'
    }
  ];

  get filteredProveedores() {
    const term = this.searchTerm.toLowerCase();
    return this.proveedores.filter(p =>
      p.nombre.toLowerCase().includes(term)
    );
  }
}
