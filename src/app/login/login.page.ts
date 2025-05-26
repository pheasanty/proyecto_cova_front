import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import {
  IonContent,
  IonItem,
  IonInput,
  IonButton,
  IonIcon,
  IonLabel, 
} from '@ionic/angular/standalone';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonItem,
    IonInput,
    IonLabel, 
    IonButton
  ]
  
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.checkIfAuthenticated();
  }

checkIfAuthenticated() {
  const token = localStorage.getItem('access_token');
  if (token) {
    const rol = this.authService.getRole();

    if (rol === 'admin') {
      this.router.navigate(['/app/home']);
    } else if (rol === 'veterinario') {
      this.router.navigate(['/app/home']);
    } else if (rol === 'ordeñador') {
      this.router.navigate(['/app/home']);
    }
  }
}


login() {
  this.authService.login(this.email, this.password).subscribe({
    next: () => {
      const rol = this.authService.getRole();

      if (rol === 'admin') {
        this.router.navigate(['/app/home']);
      } else if (rol === 'veterinario') {
        this.router.navigate(['/app/home']);
      } else if (rol === 'ordeñador') {
        this.router.navigate(['/app/home']);
      } else {
        this.router.navigate(['/login']);
      }
    },
    error: (err) => {
      console.error('Error en login:', err);
      alert('Correo o contraseña incorrectos');
    }
  });
}


  goToRegister() {
    this.router.navigate(['/register']); // 🔥 Navega a la página de registro
  }

}
