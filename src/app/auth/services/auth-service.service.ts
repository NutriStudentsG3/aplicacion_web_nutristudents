import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private apiUrl = 'https://nutristudents-api-fake.onrender.com/usuario/login'; // URL base de tu API

  constructor(private http: HttpClient) { }

  login(email: string, contraseña: string): Observable<any> {
    const url = `${this.apiUrl}/usuario/login`; // Ajusta la URL según tu endpoint de autenticación
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(url, { email, contraseña }, { headers });
  }
}