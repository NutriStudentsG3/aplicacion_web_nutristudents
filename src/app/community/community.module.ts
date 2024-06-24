import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunityPageComponent } from './community-page/community-page.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CommunityPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ]
})
export class CommunityModule { }
