import { Component } from '@angular/core';
import {
  IonContent,
  IonItem,
  IonInput,
  IonButton,
  IonLabel,
  LoadingController,
  ToastController,
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonInput,
    IonItem,
    IonButton
  ]
})
export class RegisterPage {
  name = '';
  email = '';
  password = '';
  password_confirmation = '';

  private apiUrl = 'http://localhost:8000/api'; // Cambia si tu API cambia

  constructor(
    private http: HttpClient,
    private router: Router,
    private loadingController: LoadingController,
    private toastController: ToastController
  ) {}

  async register() {
    if (this.password !== this.password_confirmation) {
      alert('Las contraseñas no coinciden');
      return;
    }

    const loading = await this.loadingController.create({
      message: 'Registrando...',
      spinner: 'crescent',
      backdropDismiss: false
    });

    await loading.present();

    this.http.post<any>(`${this.apiUrl}/register`, {
      name: this.name,
      email: this.email,
      password: this.password,
      password_confirmation: this.password_confirmation
    }).subscribe({
      next: async (res) => {
        console.log('Respuesta:', res);

        await loading.dismiss();

        // 🔥 Mostrar Toast de éxito
        const toast = await this.toastController.create({
          message: '¡Registro exitoso!',
          duration: 2000,
          color: 'success',
          position: 'bottom'
        });

        await toast.present();

        // Guardar el token
        localStorage.setItem('access_token', res.access_token);

        // Redirigir
        this.router.navigate(['/home']);
      },
      error: async (err) => {
        console.error('Error al registrar:', err);
        await loading.dismiss();
        alert('Error al crear usuario');
      }
    });
  }
}
