import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodProfileComponent } from './pages/food-profile/food-profile.component';
import { DonutChartComponent } from './components/donut-chart/donut-chart.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FoodProfileComponent,
    DonutChartComponent,
  ],
  imports: [
    CommonModule,
    FormsModule

  ],
  exports: [
    FoodProfileComponent,
  ]
})
export class PlansModule { }
