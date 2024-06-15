import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  email:string ='';
  password: string ='';
  loginError: string = '';
  returnUrl : string

  constructor(private router: Router, private authService : AuthServiceService, private route: ActivatedRoute) {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home'
  }

  onSubmit(form: any) {
    if (form.valid) {
      if(this.authService.validateUser(this.email, this.password)){
        this.router.navigate([this.returnUrl]);
      }else{
        this.loginError = 'Usuario o Contraseña incorrectos';
      }

    }
  }

}
