import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Plan } from '../models/plan.model';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  private empty_plans: Plan[] = [];
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
                { name: 'Leche', foodId:"1312313",  calories: 200 ,  grams:100, protein:100, sugar:100, fat:100},
                { name: 'Leche', foodId:"1312313",  calories: 200 ,  grams:100, protein:100, sugar:100, fat:100},
              ],
              dinner:[],
              snack:[],
              lunch:[]
            },
            {
              breakfast: [
                { name: 'Leche', foodId:"1312313",  calories: 200 ,  grams:100, protein:100, sugar:100, fat:100},
                { name: 'Leche', foodId:"1312313",  calories: 200 ,  grams:100, protein:100, sugar:100, fat:100},
              ],
              dinner:[],
              snack:[],
              lunch:[]
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
                { name: 'Leche', foodId:"1312313",  calories: 200 ,  grams:100, protein:100, sugar:100, fat:100},
                { name: 'Leche', foodId:"1312313",  calories: 200 ,  grams:100, protein:100, sugar:100, fat:100},
              ],
              dinner:[],
              snack:[],
              lunch:[]
            },
            {
              breakfast: [
                { name: 'Leche', foodId:"1312313",  calories: 200 ,  grams:100, protein:100, sugar:100, fat:100},
                { name: 'Leche', foodId:"1312313",  calories: 200 ,  grams:100, protein:100, sugar:100, fat:100},
              ],
              dinner:[],
              snack:[],
              lunch:[]
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
    const plan = this.plans.find(p => p.id === id);
    return of(plan);
  }

  addPlan(plan: Plan): void {
    console.log("Adding plan:");
  // Establecer la propiedad saved del plan como true
    plan.saved = true;
  // Agregar el plan al arreglo de planes
    this.empty_plans.push(plan);
  }

  
  explorePlans(): Observable<Plan[]> {
    const unSavedPlans = this.plans.filter(plan => !plan.saved);
    return of(unSavedPlans);
  } 
}
