import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  nombre: string = '';
  email: string = '';
  password: string = '';
  passwordRepeat: string = '';
  message: string = '';  

  private apiUrl = 'http://localhost:4200/'; // Cambia esto por tu URL de API

  constructor(private http: HttpClient) { }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      const userData = {
        nombre: this.nombre,
        email: this.email,
        password: this.password,
        passwordRepeat: this.passwordRepeat
      };

      this.http.post<any>(this.apiUrl, userData).subscribe(
        response => {
          console.log('Registro exitoso', response);
          this.message = 'Registro exitoso';
        },
        error => {
          console.error('Error en el registro', error);
          this.message = 'Error en el registro';
        }
      );
    } else {
      this.message = 'Por favor, complete todos los campos correctamente.';
    }
  }
}