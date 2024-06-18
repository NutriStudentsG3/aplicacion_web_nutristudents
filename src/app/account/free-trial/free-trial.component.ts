import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importar Router

@Component({
  selector: 'app-free-trial',
  templateUrl: './free-trial.component.html',
  styleUrls: ['./free-trial.component.css']
})
export class FreeTrialComponent {
  constructor(private router: Router) {}
  navigateToSubscription() {
    this.router.navigate(['/subscription-form']);
  }
}
