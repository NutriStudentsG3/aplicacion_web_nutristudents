import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunityPageComponent } from './community-page/community-page.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CommunityPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CommunityModule { }
