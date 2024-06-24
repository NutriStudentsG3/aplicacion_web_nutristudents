import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Plan, PlanFood } from '../models/plan.model';
import { enviroment } from '../../enviroments/enviroment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  private my_plans: string[] = [];
  private explored_plans: Plan[] = [];
  private plans: Plan[] = []

  constructor(private http: HttpClient) {
    const url = `${enviroment.apiurl}/planes`
    this.http.get<Plan[]>(url).subscribe(data => {
      this.plans = data;
    })
  }

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

  addFoodToPlan(planId: string, dayIndex: number, meal: 'breakfast' | 'lunch' | 'dinner' | 'snack', food: any , grams:number): Observable<boolean> {
    const plan = this.plans.find(p => p.id === planId);
    if (!plan) {
      return throwError(() => new Error('Plan not found'));
    }
    const day = plan.weeks[Number((dayIndex/7).toFixed(0))].days[dayIndex%7];
    if (!day) {
      return throwError(() => new Error('Day not found'));
    }
    let cur :PlanFood = {
      foodId: food.id,
      name: food.name,
      calories: food.calories * grams / 100,
      protein: food.protein * grams / 100,
      sugar: food.sugar * grams / 100,
      fat: food.fat * grams / 100,
      grams: grams,
    }
    day[meal].push(cur);
    return of(true);
  }
}
