import { Component, OnInit } from '@angular/core';

import { PlanService } from '../../services/plan.service';
import { Plan } from '../../models/plan.model';



@Component({
  selector: 'app-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.css']
})
export class PlanListComponent implements OnInit {
  savedPlans: Plan[] = [];
  

  constructor(private planService: PlanService) { }

  ngOnInit(): void {
    // Cargar planes guardados al iniciar el componente
    this.loadSavedPlans();
  }

  loadSavedPlans(): void {
    // Cargar los planes guardados desde el servicio
    this.planService.getPlans().subscribe((plans: Plan[]) => {
      // Asignar los planes guardados al arreglo
      this.savedPlans = plans.filter(plan => plan.saved==true);
    });
  }

}