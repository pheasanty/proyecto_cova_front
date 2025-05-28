import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AlertController, ToastController } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  openDropdown: string | null = null;
  rol: string | null = null;

  constructor(
    private authService: AuthService,
    private alertController: AlertController,
    private toastController: ToastController,
    private router: Router
  ) {}

  ngOnInit() {
    this.rol = this.authService.getRole();
    console.log('ROL DETECTADO EN NAVBAR (ngOnInit):', this.rol);
  }

  menu = [
    {
      label: 'Inicio',
      items: [{ label: 'Panel Principal', link: 'home' }]
    },
    {
      label: 'Producción Lechera',
      items: [
        { label: 'Registro de Ordeño', link: 'produccion/ordenos' },
        { label: 'Historial de Producción', link: 'produccion/historial' }
      ]
    },
    {
      label: 'Salud Animal',
      items: [
        { label: 'Revisiones Veterinarias', link: 'salud/revisiones' },
        { label: 'Vacunación', link: 'salud/vacunacion' }
      ]
    },
    {
      label: 'Gestión de Reproducción',
      items: [
        { label: 'Inseminaciones', link: 'reproduccion/inseminaciones' },
        { label: 'Partos', link: 'reproduccion/partos' }
      ]
    },
    {
      label: 'Inventario y Alimentos',
      items: [
        { label: 'Inventario Forraje', link: 'inventario/forraje' },
        { label: 'Suplementos', link: 'inventario/suplementos' }
      ]
    },
    {
      label: 'Perfil',
      items: [
        { label: 'Mi Cuenta', link: 'perfil' },
        { label: 'Cerrar Sesión', link: 'logout' }
      ]
    },

    {
      label: 'Reportes',
      items: [
        { label: 'Producción Lechera', link: 'reportes/produccion' },
        { label: 'Salud Animal', link: 'reportes/salud' },
        { label: 'Reproducción', link: 'reportes/reproduccion' }
      ]
    }
  ];

  showItem(label: string): boolean {
    const adminOnly = ['Gestión de Reproducción', 'Inventario y Alimentos', 'Perfil'];
    const vetOnly = ['Salud Animal', 'Perfil'];
    const ordeñadorOnly = ['Producción Lechera'];

    if (this.rol === 'admin') return true;

    if (this.rol === 'veterinario') {
      return vetOnly.includes(label) || label === 'Inicio';
    }

    if (this.rol === 'ordeñador') {
      return ordeñadorOnly.includes(label) || label === 'Inicio';
    }

    return false;
  }

  toggleDropdown(label: string) {
    this.openDropdown = this.openDropdown === label ? null : label;
  }

  async logout() {
    const alert = await this.alertController.create({
      header: '¿Cerrar sesión?',
      message: '¿Estás seguro de que deseas salir?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Salir',
          handler: async () => {
            this.authService.logout();

            const toast = await this.toastController.create({
              message: 'Sesión cerrada correctamente.',
              duration: 2000,
              position: 'bottom',
              color: 'success'
            });

            await toast.present();

            this.router.navigate(['/login']);
          }
        }
      ]
    });

    await alert.present();
  }
}
