import { Component, OnInit } from '@angular/core';
import { Plan } from '../../models/plan.model';
import { PlanService } from '../../services/plan.service';
import { Router } from '@angular/router'; // Asegúrate de importar Router


@Component({
  selector: 'app-explore-plans',
  templateUrl: './explore-plans.component.html',
  styleUrls: ['./explore-plans.component.css']
})
export class ExplorePlansComponent implements OnInit {
  exploredPlans: Plan[] = [];

  constructor(private router: Router, private planService: PlanService) { } // Inyecta Router aquí

  ngOnInit(): void {
    // Cargar los planes explorados al iniciar el componente
    this.explorePlans();
  }

  explorePlans(): void {
    // Cargar los planes explorados desde el servicio
    this.planService.explorePlans().subscribe((plans: Plan[]) => {
      // Asignar los planes explorados al arreglo
      this.exploredPlans = plans;
    });
  }

  addPlanToSaved(plan: Plan): void {
    // Agregar el plan a la lista de planes guardados


    this.planService.addPlan(plan);
  }

  goToSavedPlans(): void {
    
    // Redirigir a la ruta correspondiente de los planes guardados
    this.router.navigate(['/plans']);
  }
}