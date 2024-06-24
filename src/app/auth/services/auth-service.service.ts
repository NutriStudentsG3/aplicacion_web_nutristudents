import { enviroment } from './../../enviroments/enviroment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private apiUrl = enviroment.apiurl; // URL base de tu API

  constructor(private http: HttpClient) { }

  login(email: string, contraseña: string): Observable<any> {
    const url = `${this.apiUrl}/usuario/login`; // Ajusta la URL según tu endpoint de autenticación

    return this.http.post<any>(url, { email, contraseña }).pipe(
      catchError(this.handleError)
    )
  }

  
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }
}