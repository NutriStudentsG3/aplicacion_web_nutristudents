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
  selectedWeek: Week | undefined;
  selectedDayIndex: number | null = null;
  isEditing: boolean = false;
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
            this.selectedWeek = this.plan.weeks[0];
            this.selectedDayIndex = 0;
          }
        }
      });
    }
  }

  onWeekChange(event: Event): void {
    const weekIndex = (event.target as HTMLSelectElement).value;
    if (this.plan) {
      this.selectedWeek = this.plan.weeks[+weekIndex];
      this.selectedDayIndex = 0;
    }
  }

  onDayChange(event: Event): void {
    this.selectedDayIndex = +(event.target as HTMLSelectElement).value;
  }

  goToSavedPlans(): void {
    this.router.navigate(['/plans']);
  }

  toggleEdit(): void {
    this.isEditing = !this.isEditing;
  }

  savePlan(): void {
    if (this.plan) {
      this.planService.updatePlan(this.plan).subscribe(() => {
        this.isEditing = false;
        this.originalPlan = JSON.parse(JSON.stringify(this.plan));  // Actualizar la copia original con los cambios guardados
      });
    }
  }

  cancelEdit(): void {
    if (this.originalPlan) {
      this.plan = JSON.parse(JSON.stringify(this.originalPlan));  // Restaurar la copia original
    }
    this.isEditing = false;
  }

  deletePlan(): void {
    if (this.plan) {
        this.planService.deleteUserPlan(this.plan.id).subscribe(() => {
        this.router.navigate(['/plans']);
      });
    }
  }
}
