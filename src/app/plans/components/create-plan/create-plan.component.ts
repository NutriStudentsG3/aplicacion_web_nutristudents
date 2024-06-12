import { Component } from '@angular/core';
import { Plan, Week,Day,Meal } from '../../models/plan.model';
import { PlanService } from '../../services/plan.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-plan',
  templateUrl: './create-plan.component.html',
  styleUrl: './create-plan.component.css'
})
export class CreatePlanComponent {
  nuevoPlan: Plan = {
    id: '',
    name: '',
    description: '',
    category: '',
    weeks: [],
    saved: false
  };

  weeksCount: number = 1;

  constructor(private router: Router, private planService: PlanService) { } // Inyecta Router aquí

  updateWeeks(): void {
    if (this.weeksCount < 1) {
      this.weeksCount = 1; // No permitir valores menores a 1
    }

    while (this.nuevoPlan.weeks.length < this.weeksCount) {
      this.nuevoPlan.weeks.push({
        days: Array(7).fill(null).map(() => ({
          meals: Array(3).fill(null).map(() => ({
            name: '',
            ingredients: [],
            calories: 0
          }))
        }))
      });
    }

    while (this.nuevoPlan.weeks.length > this.weeksCount) {
      this.nuevoPlan.weeks.pop();
    }
  }

  guardarPlan(): void {
    // Asigna un ID único al plan (puedes generar un ID de forma más robusta según sea necesario)
    this.nuevoPlan.id = Math.random().toString(36).substring(2);
    // Guardar el nuevo plan utilizando el servicio de PlanService
    this.planService.addPlan(this.nuevoPlan);
    // Limpiar el formulario después de guardar el plan
    this.resetForm();
  }

  resetForm(): void {
    this.nuevoPlan = {
      id: '',
      name: '',
      description: '',
      category: '',
      weeks: [],
      saved: false
    };
    this.weeksCount = 1;
    this.updateWeeks();
  }

  goToSavedPlans(): void {
    
    // Redirigir a la ruta correspondiente de los planes guardados
    this.router.navigate(['/plans']);
  }

}
