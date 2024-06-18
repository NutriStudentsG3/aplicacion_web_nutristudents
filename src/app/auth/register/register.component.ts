import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { RegisterService } from '../services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  firstname: string= '';
  lastname: string= '';
  phone: string= '';
  email: string = '';
  password: string = '';
  passwordRepeat: string = '';
  message: string = '';


  constructor(private registerService : RegisterService, private route: Router) { }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      const userData = {
        username: this.username,
        firstname: this.firstname,
        lastname: this.lastname,
        phone: this.phone,
        email: this.email,
        password: this.password,
        
      };

      if(this.passwordRepeat!=this.password){
        this.message = 'Las contraseñas deben ser iguales';
        return;
      }
      
      if(this.registerService.createUser(userData)){
        this.route.navigate(['/obejectives'])
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