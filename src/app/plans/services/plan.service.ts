import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Plan } from '../models/plan.model';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  private my_plans: string[] = [];
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
                { name: 'arroz', foodId: "1312313", calories: 200, grams: 100, protein: 100, sugar: 100, fat: 100 },
                { name: 'Leche', foodId: "1312313", calories: 200, grams: 100, protein: 100, sugar: 100, fat: 100 },
                { name: 'arroz', foodId: "1312313", calories: 200, grams: 100, protein: 100, sugar: 100, fat: 100 },
                { name: 'te', foodId: "1312313", calories: 200, grams: 100, protein: 100, sugar: 100, fat: 100 },
              ],
              dinner: [],
              snack: [],
              lunch: []
            },
            {
              breakfast: [
                { name: 'palta', foodId: "1312313", calories: 200, grams: 100, protein: 100, sugar: 100, fat: 100 },
                { name: 'arroz', foodId: "1312313", calories: 200, grams: 100, protein: 100, sugar: 100, fat: 100 },
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
                { name: 'papa', foodId: "1312313", calories: 200, grams: 100, protein: 100, sugar: 100, fat: 100 },
              ],
              dinner: [],
              snack: [],
              lunch: []
            },
            {
              breakfast: [
                { name: 'empanad', foodId: "1312313", calories: 200, grams: 100, protein: 100, sugar: 100, fat: 100 },
                { name: 'pastel', foodId: "1312313", calories: 200, grams: 100, protein: 100, sugar: 100, fat: 100 },
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

  getPlans(): Observable<Plan[]>{
    let myPlans: Plan[]= []
    this.my_plans.forEach(plan => {
      let p = this.plans.find(p => p.id === plan)
      if(p) myPlans.push(p)
    })
    return of(myPlans);
  }

  getPlan(id: string): Observable<Plan | undefined> {
    let plan = this.plans.find(p => p.id === id);
    if(!plan) return of(undefined)
    console.log('Obteniendo plan con id:', id, 'Plan encontrado:', plan);
    if (this.my_plans.find(p => p === id)){
      plan = {...plan, saved: true} 
    }
    return of(plan);
  }
  
  

  addPlan(plan: Plan): void {
    console.log("Adding plan:", plan);
    plan.saved = true;
    this.plans.push(plan);
    this.my_plans.push(plan.id);
    console.log("Current plans:", this.my_plans);
  }
  
  

  deleteUserPlan(id: string): Observable<boolean> {
    const planIndex = this.my_plans.findIndex(plan => plan === id);
    if (planIndex !== -1) {
      this.my_plans.splice(planIndex, 1);
      return of(true);
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
    return this.my_plans.some(plan => plan === id);
  }

  updatePlan(updatedPlan: Plan): Observable<boolean> {
    const index = this.plans.findIndex(p => p.id === updatedPlan.id);
    if (index !== -1 && this.my_plans.includes(updatedPlan.id)) {
      this.plans[index] = updatedPlan;
      return of(true);
    } else {
      return throwError(() => new Error('Plan not found'));
    }
  }

  getExamplePlan(category: string): Plan | undefined {
    return this.plans.find(plan => plan.category === category);
  }
}
