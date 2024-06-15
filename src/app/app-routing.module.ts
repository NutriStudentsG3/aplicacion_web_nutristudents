import { ProfilePageComponent } from './account/pages/profile-page/profile-page.component';
import { NgModule, Component} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotImplementedComponent } from './shared/components/not-implemented/not-implemented.component';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';


import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './auth/services/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'home', component: NotImplementedComponent },
      { path: 'profile', component: ProfilePageComponent},
      { path: 'profile/:id', component: NotImplementedComponent},
      { path: 'food/:id', component: NotImplementedComponent },
    ]
  },
  { path: '**', redirectTo: '/home' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
