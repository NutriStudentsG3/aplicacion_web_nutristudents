import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotImplementedComponent } from './shared/components/not-implemented/not-implemented.component';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { FreeTrialComponent } from './account/free-trial/free-trial.component';
import { SubscriptionFormComponent } from './account/subscription-form/subscription-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'free-trial', component: FreeTrialComponent },
  { path: 'subscription-form', component: SubscriptionFormComponent},
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'home', component: FreeTrialComponent },
      { path: 'profile', component: NotImplementedComponent },
      { path: 'food/:id', component: NotImplementedComponent },
    ]
  },
  { path: '**', redirectTo: '/free-trial' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
