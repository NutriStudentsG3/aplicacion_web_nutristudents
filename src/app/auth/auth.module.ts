import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ObejectivesComponent } from './obejectives/obejectives.component';
import { MeetuserComponent } from './meetuser/meetuser.component';
import { ResultComponent } from './result/result.component';


@NgModule({
  declarations: [

    LoginComponent,
    RegisterComponent,
    ObejectivesComponent,
    MeetuserComponent,
    ResultComponent
  ],
  imports: [
    CommonModule,
    FormsModule
    ],
  exports:[
    LoginComponent,
    RegisterComponent,
    ObejectivesComponent,
    MeetuserComponent,
    ResultComponent

  ]
})
export class AuthModule { }