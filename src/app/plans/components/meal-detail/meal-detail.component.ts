import { Component, Input, OnInit } from '@angular/core';
import { PlanFood } from '../../models/plan.model';
import { PlanService } from '../../services/plan.service';

@Component({
  selector: 'app-meal-detail',
  templateUrl: './meal-detail.component.html',
  styleUrls: ['./meal-detail.component.css']
})
export class MealDetailComponent implements OnInit {
  @Input() meal: PlanFood[] | undefined;
  @Input() mealType: string = '';
  @Input() editable: boolean = false;
  @Input() isEditing: boolean = false;
  isOpen: boolean = false;
  originalMeal: PlanFood[] | undefined;
  newMeal: PlanFood = this.createEmptyMeal();

  constructor(private planService: PlanService) {}

  ngOnInit(): void {
    if (this.meal) {
      this.originalMeal = JSON.parse(JSON.stringify(this.meal));
    }
  }

  

  toggleAccordion(): void {
    this.isOpen = !this.isOpen;
  }

  toggleEdit(): void {
    this.isEditing = !this.isEditing;
  }

  saveMeal(): void {
    if (this.meal) {
      this.originalMeal = JSON.parse(JSON.stringify(this.meal));
      this.isEditing = false;
    }
  }

  cancelEdit(): void {
    if (this.originalMeal) {
      this.meal = JSON.parse(JSON.stringify(this.originalMeal));
    }
    this.isEditing = false;
  }

  createEmptyMeal(): PlanFood {
    return {
      name: '',
      foodId: '',
      calories: 0,
      grams: 0,
      protein: 0,
      sugar: 0,
      fat: 0
    };
  }

  addNewMeal(): void {
    if (this.meal) {
      this.meal.push(this.newMeal);
      this.newMeal = this.createEmptyMeal(); // Reset newMeal for the next addition
    }
  }

  

}
