import { Component, OnInit } from '@angular/core';
import { Plan } from '../../models/plan.model';
import { PlanService } from '../../services/plan.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray, AbstractControl } from '@angular/forms'; // Importar FormArray

@Component({
  selector: 'app-create-plan',
  templateUrl: './create-plan.component.html',
  styleUrls: ['./create-plan.component.css']
})
export class CreatePlanComponent implements OnInit {
  nuevoPlan: Plan = {
    id: '',
    name: '',
    description: '',
    category: '',
    createdDate: new Date(12,12,12),
    weeks: [],
    saved: false,
    isPublic: true,
  };

  weeksCount: number = 1;
  form: FormGroup;
  secondForm: FormGroup;
  showSecondForm: boolean = false;

  constructor(private router: Router, private planService: PlanService, private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(1)]],
      categoria: ['', Validators.required],
      descripcion: [''],
      semanas: ['', [Validators.required, Validators.min(1), Validators.max(20)]]
    });
    this.secondForm = this.fb.group({
      weeks: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(1)]],
      categoria: ['', Validators.required],
      descripcion: [''],
      semanas: ['', [Validators.required, Validators.min(1), Validators.max(20)]]
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log(this.form.value);
      this.nuevoPlan.name = this.form.value.nombre;
      this.nuevoPlan.category = this.form.value.categoria;
      this.nuevoPlan.description = this.form.value.descripcion;
      this.weeksCount = this.form.value.semanas;
      const weeksArray = this.secondForm.get('weeks') as FormArray;
      for (let i = 0; i < this.weeksCount; i++) {
        weeksArray.push(this.fb.group({
          days: this.fb.array([])
        }));
      }

      this.showSecondForm = true;
    } else {
      console.log('Formulario no válido');
    }
  }

  get weeks(): FormArray {
    return this.secondForm.get('weeks') as FormArray;
  }

  days(weekIndex: number): FormArray {
    return this.weeks.at(weekIndex).get('days') as FormArray;
  }

  meals(weekIndex: number, dayIndex: number): FormArray {
    return this.days(weekIndex).at(dayIndex).get('meals') as FormArray;
  }

  addDay(weekIndex: number): void {
    this.days(weekIndex).push(this.fb.group({
      meals: this.fb.array([])
    }));
  }

  addMeal(weekIndex: number, dayIndex: number): void {
    this.meals(weekIndex, dayIndex).push(this.fb.group({
      name: ['', Validators.required],
      ingredients: ['', Validators.required],
      calories: [0, Validators.required]
    }));
  }

  onSecondSubmit(): void {
    if (this.secondForm.valid) {
      this.nuevoPlan.weeks = this.secondForm.value.weeks.map((week: any) => ({
        days: week.days.map((day: any) => ({
          meals: day.meals.map((meal: any) => ({
            name: meal.name,
            ingredients: meal.ingredients.split(','), // Split ingredients by comma
            calories: meal.calories
          }))
        }))
      }));
      this.planService.addPlan(this.nuevoPlan);
      console.log('Plan añadido:', this.nuevoPlan);
      this.router.navigate(['/path-to-somewhere']); // Navega a la ruta deseada después de guardar el plan
    } else {
      console.log('Segundo formulario no válido');
    }
  }
}
