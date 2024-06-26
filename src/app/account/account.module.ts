import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { InformationFormComponent } from './components/tasks/information-form/information-form.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { TasksTabComponent } from './components/tasks-tab/tasks-tab.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatFormField } from '@angular/material/form-field';
import { FreeTrialComponent } from './free-trial/free-trial.component';
import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';
import { PostSectionComponent } from './components/tasks/post-section/post-section.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ProfilePageComponent,
    InformationFormComponent,
    UserCardComponent,
    TasksTabComponent,
    FreeTrialComponent,
    SubscriptionFormComponent,
    PostSectionComponent
  ],
 
  imports: [
    CommonModule,
    MatTabsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatFormField,
    MatInputModule,
    FormsModule,
    RouterModule,
  ],
  
  exports: [
    FreeTrialComponent,
    SubscriptionFormComponent  
  ],

})
export class AccountModule { }
