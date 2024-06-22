import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { AccountModule } from './account/account.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { CommunityModule } from './community/community.module';
import { PlansModule } from './plans/plans.module';


@NgModule({
  declarations: [
    AppComponent
    ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    AccountModule,
    BrowserAnimationsModule,
    AuthModule,
    CommunityModule,
    FormsModule,
    PlansModule,
    ],
  providers: [
    provideAnimationsAsync()

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
