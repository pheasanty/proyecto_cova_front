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

  private apiUrl = 'http://127.0.0.1:8000/api'; // Ajusta si cambia

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password }).pipe(
      tap(response => {
        // Guarda el token y el usuario
        localStorage.setItem('access_token', response.access_token);
        localStorage.setItem('user', JSON.stringify(response.user));
        this.isLoggedInSubject.next(true);
      })
    );
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
    this.isLoggedInSubject.next(false);
    this.router.navigate(['/login']);
  }

  isAuthenticated(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }

  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

getUser(): any {
  const userStr = localStorage.getItem('user');
  try {
    return userStr ? JSON.parse(userStr) : null;
  } catch (e) {
    return null;
  }
}

getRole(): string | null {
  return this.getUser()?.rol || null;
}


  hasToken(): boolean {
    return !!localStorage.getItem('access_token');
  }
}
