import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FreeTrialComponent } from './free-trial/free-trial.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';



@NgModule({
  declarations: [
    FreeTrialComponent,
    SubscriptionFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    FreeTrialComponent,
    SubscriptionFormComponent
  ]
})
export class AccountModule { }
