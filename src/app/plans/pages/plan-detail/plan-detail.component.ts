import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanService } from '../../services/plan.service';
import { Plan, Week, Day } from '../../models/plan.model';

@Component({
  selector: 'app-plan-detail',
  templateUrl: './plan-detail.component.html',
  styleUrls: ['./plan-detail.component.css']
})
export class PlanDetailComponent implements OnInit {
  plan: Plan | undefined;
  selectedWeek: number | undefined = undefined;
  selectedDayIndex: number | undefined = undefined;
  originalPlan: Plan | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private planService: PlanService
  ) {}

  ngOnInit(): void {
    this.getPlanDetails();
  }

  getPlanDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.planService.getPlan(id).subscribe((plan) => {
        if (plan) {
          this.plan = { ...plan };
          this.originalPlan = JSON.parse(JSON.stringify(plan));  // Guardar una copia profunda del plan
          if (this.plan.weeks.length > 0) {
            this.selectedWeek = 0;
            this.selectedDayIndex = 0;
          }
        }
      });
    }
  }


  goToSavedPlans(): void {
    console.log(this.selectedWeek, this.selectedDayIndex);
    //this.router.navigate(['/plans']);
  }


  savePlan(): void {
    if (this.plan) {
      this.planService.updatePlan(this.plan).subscribe(() => {
        this.originalPlan = JSON.parse(JSON.stringify(this.plan));  // Actualizar la copia original con los cambios guardados
      });
    }
  }

  
  deletePlan(): void {
    if (this.plan) {
        this.planService.deleteUserPlan(this.plan.id).subscribe(() => {
        this.router.navigate(['/plans']);
      });
    }
  }

  getRange(count: number): number[] {
    return Array(count).fill(0).map((x, i) => i);
  }
  
}
