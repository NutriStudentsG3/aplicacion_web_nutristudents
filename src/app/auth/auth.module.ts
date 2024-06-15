import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http'; 
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [

    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    LoginComponent,
    RegisterComponent

  ]
})
export class AuthModule { }