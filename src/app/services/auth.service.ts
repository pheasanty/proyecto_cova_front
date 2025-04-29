import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken());

  private apiUrl = 'http://127.0.0.1:8000/api'; // Cambia por tu API real

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password })
      .pipe(
        tap(response => {
          localStorage.setItem('access_token', response.access_token);
          this.isLoggedInSubject.next(true);
        })
      );
  }

  logout() {
    // 🔥 Borrar token
    localStorage.removeItem('access_token');
    this.isLoggedInSubject.next(false);

    // 🔥 Redirigir al login
    this.router.navigate(['/login']);
  }

  isAuthenticated(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('access_token');
  }
}
