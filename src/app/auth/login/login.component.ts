import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';
import { UserStoreService } from '../../account/services/user.store.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Cambiado de 'styleUrl' a 'styleUrls'
})

export class LoginComponent {
  email: string = '';
  password: string = '';
  loginError: string = '';
  returnUrl: string;

  constructor(private router: Router, private authService: AuthServiceService, private route: ActivatedRoute, private userStore: UserStoreService) {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
  }

  onSubmit(form: any) {
    if (form.valid) {
      this.authService.login(this.email, this.password).subscribe({
        next: (res) => {
          console.log(res);
          if (res.user) {
            console.log(res.user)
            this.userStore.setUser(res.user);
            this.router.navigate([this.returnUrl]);
          } else {
            this.loginError = 'Usuario o Contraseña incorrectos';
          }
        },
        error: (error) => {
          this.loginError = 'Hubo un problema al iniciar sesión. Por favor, intenta nuevamente.';
        }
      });
    }
  }
}