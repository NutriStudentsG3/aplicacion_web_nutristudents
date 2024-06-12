import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { PlanService } from '../../services/plan.service';
import { Plan } from '../../models/plan.model';


@Component({
  selector: 'app-plan-detail',
  templateUrl: './plan-detail.component.html',
  styleUrls: ['./plan-detail.component.css']
})
export class PlanDetailComponent implements OnInit {
  plan: Plan | undefined;

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
      this.planService.getPlan(id).subscribe(plan => this.plan = plan);
    }
  }
  goToSavedPlans(): void {
    
    // Redirigir a la ruta correspondiente de los planes guardados
    this.router.navigate(['/plans']);
  }
}
