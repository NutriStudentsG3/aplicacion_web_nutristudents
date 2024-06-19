import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { NotImplementedComponent } from './components/not-implemented/not-implemented.component';



@NgModule({
  declarations: [
    NotImplementedComponent,
    SearchBarComponent,
    MainLayoutComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    NotImplementedComponent,
    SearchBarComponent,
    MainLayoutComponent,
  ]
})
export class SharedModule { }
