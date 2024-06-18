import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlanListComponent } from './pages/plan-list/plan-list.component';
import { ExplorePlansComponent } from './pages/explore-plans/explore-plans.component';
import { CreatePlanComponent } from './pages/create-plan/create-plan.component';
import { PlanDetailComponent } from './pages/plan-detail/plan-detail.component';
import { PlansRoutingModule } from './plans-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PlanListComponent,
    ExplorePlansComponent,
    CreatePlanComponent,
    PlanDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PlansRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  exports: [
    PlanListComponent, 
  ]
})
export class PlansModule { }
