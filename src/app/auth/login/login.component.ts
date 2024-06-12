import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  email:string ='';
  password: string ='';
  loginError: string = '';

  private readonly validUser = {
    email: 'snacktrack@gmail.com',
    password: 'password123'
  };

  constructor(private router: Router) {}

  onSubmit(form: any) {
    if (form.valid) {
      if (this.email === this.validUser.email && this.password === this.validUser.password) {
        this.loginError = '';

        this.router.navigate(['/home']);
      } else {
        this.loginError = 'Usuario o Contraseña incorrectos';
      }
    }
  }

}
