import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodProfileComponent } from './pages/food-profile/food-profile.component';
import { DonutChartComponent } from './components/donut-chart/donut-chart.component';

@NgModule({
  declarations: [
    FoodProfileComponent,
    DonutChartComponent,
  ],
  imports: [
    CommonModule,

  ],
  exports: [
    FoodProfileComponent,
  ]
})
export class PlansModule { }
