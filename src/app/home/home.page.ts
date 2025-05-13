import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, AlertController, ToastController } from '@ionic/angular/standalone';
import { AuthService } from '../services/auth.service';
import { NavbarComponent } from '../components/navbar/navbar.component';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    NavbarComponent,
    IonContent
  ],
})
export class HomePage {
  constructor(
    private authService: AuthService,
    private alertController: AlertController,
    private toastController: ToastController
  ) {}

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
            this.authService.logout(); // 🔥 Hacemos logout

            // 🔥 Mostramos el Toast
            const toast = await this.toastController.create({
              message: 'Has cerrado sesión correctamente.',
              duration: 2000, // 2 segundos
              position: 'bottom',
              color: 'success'
            });

            await toast.present();
          }
        }
      ]
    });

    await alert.present();
  }
}
