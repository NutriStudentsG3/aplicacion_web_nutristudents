import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Plan } from '../../models/plan.model';
import { PlanService } from '../../services/plan.service';

@Component({
  selector: 'app-create-plan',
  templateUrl: './create-plan.component.html',
  styleUrls: ['./create-plan.component.css']
})
export class CreatePlanComponent implements OnInit {
  form: FormGroup;
  nuevoPlan: Plan = {
    id: '',
    name: '',
    description: '',
    category: '',
    createdDate: new Date(),
    weeks: [],
    saved: false,
    isPublic: true,
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private planService: PlanService
  ) {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(1)]],
      categoria: ['', Validators.required],
      semanas: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
      decidir: [false]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.form.valid) {
      const formValue = this.form.value;
      const newPlan: Plan = {
        id: this.generateId(),
        name: formValue.nombre,
        category: formValue.categoria,
        description: '',
        createdDate: new Date(),
        weeks: [],
        saved: true,
        isPublic: true,
      };

      if (formValue.decidir) {
        // Copiar el plan de ejemplo correspondiente
        const examplePlan = this.planService.getExamplePlan(formValue.categoria);
        if (examplePlan) {
          newPlan.description = examplePlan.description;
          newPlan.weeks = examplePlan.weeks.map(week => ({
            days: week.days.map(day => ({
              breakfast: day.breakfast,
              lunch: day.lunch,
              snack: day.snack,
              dinner: day.dinner
            }))
          }));
        }
      } else {
        // Crear plan con datos vacíos para editar después
        for (let i = 0; i < formValue.semanas; i++) {
          newPlan.weeks.push({
            days: Array(7).fill(null).map(() => ({
              breakfast: [{ foodId: '', name: '', grams: 0, protein: 0, sugar: 0, fat: 0, calories: 0 }],
              lunch: [{ foodId: '', name: '', grams: 0, protein: 0, sugar: 0, fat: 0, calories: 0 }],
              snack: [{ foodId: '', name: '', grams: 0, protein: 0, sugar: 0, fat: 0, calories: 0 }],
              dinner: [{ foodId: '', name: '', grams: 0, protein: 0, sugar: 0, fat: 0, calories: 0 }]
            }))
          });
        }
      }

      this.planService.addPlan(newPlan);
      console.log('Plan añadido:', newPlan);
      this.router.navigate(['/plans']); // Navega a la lista de planes guardados
    } else {
      console.log('Formulario no válido');
    }
  }

  generateId(): string {
    return Math.random().toString(36).substring(2, 11);
  }

  goToSavedPlans(): void {
    // Redirigir a la ruta correspondiente de los planes guardados
    this.router.navigate(['/plans']);
  }

}
