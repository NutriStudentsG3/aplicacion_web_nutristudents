import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RegisterService } from '../services/register.service';
import { Router } from '@angular/router';

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

  constructor(private http: HttpClient, private registerService : RegisterService, private route: Router) { }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      const userData = {
        nombre: this.nombre,
        email: this.email,
        password: this.password,
        passwordRepeat: this.passwordRepeat
      };
      if(this.passwordRepeat!=this.password){
        this.message = 'Las contraseñas deben ser iguales';
        return;
      }
      
      if(this.registerService.createUser(userData)){
        this.route.navigate(['/home'])
      }
      else{
        this.message = 'Error intentelo mas tarde.';
        return;
      }


    } else {
      this.message = 'Por favor, complete todos los campos correctamente.';
    }
  }
}