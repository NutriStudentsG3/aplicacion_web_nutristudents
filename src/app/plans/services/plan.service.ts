import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Plan } from '../models/plan.model';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  private plans: Plan[] = [
    {
      id: '1',
      name: 'Plan de Ejemplo 1',
      description: 'Descripción del plan de ejemplo 1',
      category: 'Mantenimiento',
      weeks: [
        {
          days: [
            {
              meals: [
                { name: 'Desayuno', ingredients: ['Avena', 'Plátano'], calories: 200 },
                { name: 'Almuerzo', ingredients: ['Pollo', 'Arroz', 'Ensalada'], calories: 500 }
              ]
            },
            {
              meals: [
                { name: 'Desayuno', ingredients: ['Huevos', 'Pan Integral'], calories: 250 },
                { name: 'Almuerzo', ingredients: ['Pescado', 'Quinoa'], calories: 450 }
              ]
            }
          ]
        }
      ],
      saved: false // Propiedad "saved" agregada
    },
    {
      id: '2',
      name: 'Plan de Ejemplo 2',
      description: 'Descripción del plan de ejemplo 2',
      category: 'Pérdida de Peso',
      weeks: [
        {
          days: [
            {
              meals: [
                { name: 'Desayuno', ingredients: ['Avena', 'Frutas', 'Yogur'], calories: 300 },
                { name: 'Almuerzo', ingredients: ['Ensalada', 'Pechuga de Pollo', 'Arroz Integral'], calories: 400 }
              ]
            },
            {
              meals: [
                { name: 'Desayuno', ingredients: ['Batido de Proteínas', 'Frutos Secos'], calories: 350 },
                { name: 'Almuerzo', ingredients: ['Pescado al Vapor', 'Verduras al Vapor'], calories: 300 }
              ]
            }
          ]
        }
      ],
      saved: false // Propiedad "saved" agregada
    }
    // Agrega más planes de ejemplo aquí
  ];

  constructor() {}

  getPlans(): Observable<Plan[]> {
    return of(this.plans);
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
    this.plans.push(plan);
  }

  
  explorePlans(): Observable<Plan[]> {
    const unSavedPlans = this.plans.filter(plan => !plan.saved);
    return of(unSavedPlans);
  } 
}
