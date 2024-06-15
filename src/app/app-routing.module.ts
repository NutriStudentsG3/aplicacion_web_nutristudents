import { ProfilePageComponent } from './account/pages/profile-page/profile-page.component';
import { NgModule, Component} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotImplementedComponent } from './shared/components/not-implemented/not-implemented.component';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';



import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ObejectivesComponent } from './auth/obejectives/obejectives.component';
import { MeetuserComponent } from './auth/meetuser/meetuser.component';
import { ResultComponent } from './auth/result/result.component';
import { AuthGuard } from './auth/services/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'obejectives', component: ObejectivesComponent },
  { path: 'meetuser', component: MeetuserComponent },
  { path: 'result', component:ResultComponent},

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
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
