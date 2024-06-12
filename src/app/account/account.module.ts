import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { InformationFormComponent } from './components/tasks/information-form/information-form.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { TasksTabComponent } from './components/tasks-tab/tasks-tab.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    ProfilePageComponent,
    InformationFormComponent,
    UserCardComponent,
    TasksTabComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    BrowserAnimationsModule,
  ]
})
export class AccountModule { }
