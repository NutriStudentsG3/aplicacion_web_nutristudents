import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Plan } from '../models/plan.model';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  private empty_plans: Plan[] = [];
  private explored_plans: Plan[] = [];
  private plans: Plan[] = [
    {
      id: '1',
      name: 'Plan de Ejemplo 1',
      description: 'Descripción del plan de ejemplo 1',
      category: 'Mantenimiento',
      createdDate: new Date(2024, 12, 12),
      weeks: [
        {
          days: [
            {
              breakfast: [
                { name: 'caca', foodId: "1312313", calories: 200, grams: 100, protein: 100, sugar: 100, fat: 100 },
                { name: 'Leche', foodId: "1312313", calories: 200, grams: 100, protein: 100, sugar: 100, fat: 100 },
                { name: 'caca', foodId: "1312313", calories: 200, grams: 100, protein: 100, sugar: 100, fat: 100 },
                { name: 'caca', foodId: "1312313", calories: 200, grams: 100, protein: 100, sugar: 100, fat: 100 },
              ],
              dinner: [],
              snack: [],
              lunch: []
            },
            {
              breakfast: [
                { name: 'Leche', foodId: "1312313", calories: 200, grams: 100, protein: 100, sugar: 100, fat: 100 },
                { name: 'Leche', foodId: "1312313", calories: 200, grams: 100, protein: 100, sugar: 100, fat: 100 },
              ],
              dinner: [],
              snack: [],
              lunch: []
            }
          ]
        }
      ],
      saved: false,
      isPublic: true,
    },
    {
      id: '2',
      name: 'Plan de Ejemplo 2',
      description: 'Descripción del plan de ejemplo 2',
      category: 'Pérdida de Peso',
      createdDate: new Date(2024, 12, 12),
      weeks: [
        {
          days: [
            {
              breakfast: [
                { name: 'Leche', foodId: "1312313", calories: 200, grams: 100, protein: 100, sugar: 100, fat: 100 },
                { name: 'Leche', foodId: "1312313", calories: 200, grams: 100, protein: 100, sugar: 100, fat: 100 },
              ],
              dinner: [],
              snack: [],
              lunch: []
            },
            {
              breakfast: [
                { name: 'Leche', foodId: "1312313", calories: 200, grams: 100, protein: 100, sugar: 100, fat: 100 },
                { name: 'Leche', foodId: "1312313", calories: 200, grams: 100, protein: 100, sugar: 100, fat: 100 },
              ],
              dinner: [],
              snack: [],
              lunch: []
            }
          ]
        },
        {
          days: [
            {
              breakfast: [
                { name: 'Leche', foodId: "1312313", calories: 200, grams: 100, protein: 100, sugar: 100, fat: 100 },
                { name: 'Leche', foodId: "1312313", calories: 200, grams: 100, protein: 100, sugar: 100, fat: 100 },
              ],
              dinner: [],
              snack: [],
              lunch: []
            },
            {
              breakfast: [
                { name: 'Leche', foodId: "1312313", calories: 200, grams: 100, protein: 100, sugar: 100, fat: 100 },
                { name: 'Leche', foodId: "1312313", calories: 200, grams: 100, protein: 100, sugar: 100, fat: 100 },
              ],
              dinner: [],
              snack: [],
              lunch: []
            }
          ]
        }
      ],
      saved: false,
      isPublic: true,
    }
  ];

  constructor() {}

  getPlans(): Observable<Plan[]> {
    return of(this.empty_plans);
  }

  getPlan(id: string): Observable<Plan | undefined> {
    const plan = this.empty_plans.find(p => p.id === id);
    console.log('Obteniendo plan con id:', id, 'Plan encontrado:', plan);
    return of(plan);
  }
  
  

  addPlan(plan: Plan): void {
    console.log("Adding plan:", plan);
    plan.saved = true;
    this.empty_plans.push(plan);
    console.log("Current plans:", this.empty_plans);
  }
  
  

  deleteUserPlan(id: string): Observable<void> {
    const planIndex = this.empty_plans.findIndex(plan => plan.id === id);
    if (planIndex !== -1) {
      this.empty_plans.splice(planIndex, 1);
      return of(undefined);
    } else {
      return throwError(() => new Error('Plan not found'));
    }
  }

  explorePlans(): Observable<Plan[]> {
    if (this.explored_plans.length === 0) {
      this.explored_plans = this.plans.filter(plan => !plan.saved);
    }
    return of(this.explored_plans);
  }

  isPlanSaved(id: string): boolean {
    return this.empty_plans.some(plan => plan.id === id);
  }

  updatePlan(updatedPlan: Plan): Observable<void> {
    const index = this.empty_plans.findIndex(p => p.id === updatedPlan.id);
    if (index !== -1) {
      this.empty_plans[index] = updatedPlan;
      return of(undefined);
    } else {
      return throwError(() => new Error('Plan not found'));
    }
  }

  getExamplePlan(category: string): Plan | undefined {
    return this.plans.find(plan => plan.category === category);
  }
}
