import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanListComponent } from './pages/plan-list/plan-list.component';
import { ExplorePlansComponent } from './pages/explore-plans/explore-plans.component';
import { CreatePlanComponent } from './pages/create-plan/create-plan.component';
import { PlanDetailComponent } from './pages/plan-detail/plan-detail.component';

const routes: Routes = [
  {
    path: '',
    component: PlanListComponent
  },
  {
    path: 'detail/:id',
    component: PlanDetailComponent
  },
  {
    path: 'create',
    component: CreatePlanComponent
  },
  {
    path: 'explore',
    component: ExplorePlansComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlansRoutingModule { }
