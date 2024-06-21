import { Component, Input, OnInit } from '@angular/core';
import { PlanService } from '../../services/plan.service';
import {  Router } from '@angular/router';
import { FoodItem } from '../../models/foodItem.model';
import { PlanFood } from '../../models/plan.model';

@Component({
  selector: 'app-meal-detail',
  templateUrl: './meal-detail.component.html',
  styleUrls: ['./meal-detail.component.css']
})
export class MealDetailComponent implements OnInit {
  @Input() meal: PlanFood[] | undefined;
  @Input() mealType: string = '';
  @Input() editable: boolean = false;
  @Input() weekIndex: number | undefined;
  @Input() dayIndex: number | undefined;
  @Input() planId: string | undefined;
  isOpen: boolean = false;
  originalMeal: PlanFood[] | undefined;

  constructor(private planService: PlanService, private router: Router) {}

  ngOnInit(): void {
    if (this.meal) {
      this.originalMeal = JSON.parse(JSON.stringify(this.meal));
    }
  }

  toggleAccordion(): void {
    this.isOpen = !this.isOpen;
  }
  goToAdd(){
    this.router.navigate(['/plans/addFood/plan',  this.planId!, 'day', (this.weekIndex!) * 7 + ( this.dayIndex!), 'meal', this.mealType]);
  }

}
