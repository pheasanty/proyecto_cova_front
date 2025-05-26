import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, AlertController, ToastController } from '@ionic/angular/standalone';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonContent
  ],
})
export class HomePage {
  constructor(
    private authService: AuthService,
    private alertController: AlertController,
    private toastController: ToastController
  ) {}


}
