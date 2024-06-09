import { NgModule, Component} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotImplementedComponent } from './not-implemented/not-implemented.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: NotImplementedComponent },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'home', component: NotImplementedComponent },
      { path: 'profile', component: NotImplementedComponent},
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
