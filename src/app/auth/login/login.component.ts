import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  email:string ='';
  password: string ='';

  onSubmit(form: NgForm): void {
    if (form.valid) {

      console.log('Email:', this.email);
      console.log('Password:', this.password);
    }
  }
}
