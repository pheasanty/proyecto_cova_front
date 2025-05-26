import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // 👈 agrega esto
import { AuthService } from 'src/app/services/auth.service';
import { AlertController, ToastController } from '@ionic/angular/standalone';
import { Router } from '@angular/router'; // 👈 agrega esto

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule], // 👈 agrega esto
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    constructor(
    private authService: AuthService,
    private alertController: AlertController,
    private toastController: ToastController,
    private router: Router)
  {}
  menu = [
  {
    label: 'Inicio',
    items: [
      { label: 'Dashboard', link: '/home' }
    ]
  },
  
   {
    label: 'Gestión de Inventario',
    items: [
      { label: 'Inventario', link: 'Gestioninv/inventario' },
      { label: 'Categoría de productos', link: 'Gestioninv/categorias' }
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
      { label: 'Proveedores', link: '/GestionProv/proveedores' },
      { label: 'Orden de compra', link: '/GestionProv/orden-compra' }
    ]
  },
    {
    label: 'Perfil',
    items: [
      { label: 'Ajustes', link: '/Ajustes' },
      { label: 'Administración de Sistema', link: '/sysadmin' },
      { label: 'Cerrar Sesión', link: '/logout' },
    ]
  },
  
  
];


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
                message: 'Has cerrado sesión correctamente.',
                duration: 2000,
                position: 'bottom',
                color: 'success'
              });

              await toast.present();

              this.router.navigate(['/login']); // redirigir al login
            }
          }
        ]
      });

      await alert.present();
    }
}

