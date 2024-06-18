import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { InformationFormComponent } from './components/tasks/information-form/information-form.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { TasksTabComponent } from './components/tasks-tab/tasks-tab.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FreeTrialComponent } from './free-trial/free-trial.component';
import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';


@NgModule({
  declarations: [
    ProfilePageComponent,
    InformationFormComponent,
    UserCardComponent,
    TasksTabComponent,
    FreeTrialComponent,
    SubscriptionFormComponent
  ],
 
  imports: [
    CommonModule,
    MatTabsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormField,
    MatInputModule
  ],
  
  exports: [
    FreeTrialComponent,
    SubscriptionFormComponent  
  ],

})
export class AccountModule { }
