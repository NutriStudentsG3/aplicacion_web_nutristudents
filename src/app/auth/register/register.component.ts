import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service'; // Asegúrate de importar el servicio correcto

interface UserRegistrationResponse {
  success: boolean;
  message?: string; // Mensaje opcional de éxito o error
  // Otros campos según sea necesario
}

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

  constructor(private registerService: RegisterService, private router: Router) { }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      const userData = {
        nombre: this.nombre,
        email: this.email,
        password: this.password,
        passwordRepeat: this.passwordRepeat
      };

      const isRegistered = this.registerService.registerUser(userData);

      if (isRegistered) {
        this.message = 'Registro exitoso';
        // Redirige al usuario a la siguiente página (en este caso, 'objectives')
        this.router.navigateByUrl('/obejectives');
      } else {
        this.message = 'Error en el registro';
      }
    } else {
      this.message = 'Por favor, complete todos los campos correctamente.';
    }
  }
}