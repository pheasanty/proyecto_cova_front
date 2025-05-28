import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdenoService {

  private apiUrl = 'http://127.0.0.1:8000/api/ordenos'; // Cambia si es necesario

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('access_token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }

  registrarOrdeno(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data, {
      headers: this.getHeaders()
    });
  }

  obtenerOrdenos(): Observable<any> {
    return this.http.get(this.apiUrl, {
      headers: this.getHeaders()
    });
  }

  // Si quieres agregar update/delete luego:
  // actualizarOrdeno(id: number, data: any): Observable<any> { ... }
  // eliminarOrdeno(id: number): Observable<any> { ... }
}
